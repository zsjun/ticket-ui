import React, { cloneElement, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { pick } from "lodash";
import { nfn } from "../../common";
import { useDropdownPosition } from "../../common/hooks";
import { getDefaultPortalSelector } from "../../common/portalHelpers";

/**
 * 基本的Dropdown组件，可在其上针对业务逻辑进行封装
 */
function Dropdown(props) {
  const {
    children,
    defaultOpen,
    disabled,
    trigger,
    className,
    overlayClassName,
    style,
    overlay,
    visible,
    asyncVisible,
    inline,
    stopPropagation = true,
    onVisibleChange,
    getContainer: customGetContainer = (val) => val,
  } = props;
  const [show, setShow] = useState(defaultOpen);
  const changeVisible = show => {
    setShow(show);
    onVisibleChange(show);
  };
  const ref = useRef();
  const onMouseEnter = trigger === "hover" ? () => changeVisible(true) : null;
  const onMouseLeave = trigger === "hover" ? () => changeVisible(false) : null;
  const onWindowClick =
    trigger === "click"
      ? e => {
          if (e.target && ref.current && ref.current.contains(e.target)) {
            return;
          }
          if (show) {
            changeVisible(false);
          }
        }
      : null;

  useEffect(() => {
    window.addEventListener("click", onWindowClick);

    return () => window.removeEventListener("click", onWindowClick);
  });

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  const [position] = useDropdownPosition(ref, customGetContainer);
  if (asyncVisible && !position.width) {
    setTimeout(() => {
      setShow(asyncVisible);
    }, 0);
  }

  const classes = classNames("dropdown", className, {
    open: show && !disabled,
    disabled,
  });

  const overlayCls = classNames("dropdown-overlay", overlayClassName, {
    open: show && !disabled,
    inline: inline,
  });
  const container = customGetContainer(ref.current) || document.body;
  return (
    <div
      className={classes}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
      onClick={e => {
        stopPropagation && e.stopPropagation();
      }}
    >
      {cloneElement(children, {
        onClick:
          trigger === "click" && !disabled
            ? e => {
                stopPropagation && e.stopPropagation();
                changeVisible(!show);
              }
            : null
      })}
      {inline ? (
        <div className={overlayCls}>{overlay}</div>
      ) : (
        createPortal(
          <div
            className={overlayCls}
            style={{
              left: position.left,
              top: position.top,
              minWidth: position.width
            }}
          >
            {overlay}
          </div>,
          container
        )
      )}
    </div>
  );
}

Dropdown.defaultProps = {
  trigger: "click",
  asyncVisible: false,
  onVisibleChange: nfn
};
Dropdown.propTypes = {
  /** dropdown展示的内容 */
  overlay: PropTypes.any,
  /** 触发展示的方式 */
  trigger: PropTypes.oneOf(["click", "hover"]),
  /** 是否默认展开 */
  defaultOpen: PropTypes.bool,
  /** 主动控制展开收起 */
  visible: PropTypes.bool,
  /** 异步控制展开收起 */
  asyncVisible: PropTypes.bool,
  /** 展开收起的回调 */
  onVisibleChange: PropTypes.func,
  /** 弹出overlay组件作为子组件而非portal */
  inline: PropTypes.bool,
  /** 阻止点击冒泡 */
  stopPropagation: PropTypes.bool
};

export default Dropdown;
