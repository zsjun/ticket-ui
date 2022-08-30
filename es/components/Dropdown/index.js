function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { cloneElement, useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { nfn } from "../../common";
import { useDropdownPosition } from "../../common/hooks";
import { getDefaultPortalSelector } from "../../common/portalHelpers";
/**
 * 基本的Dropdown组件，可在其上针对业务逻辑进行封装
 */

function Dropdown(props) {
  const children = props.children,
        defaultOpen = props.defaultOpen,
        disabled = props.disabled,
        trigger = props.trigger,
        className = props.className,
        style = props.style,
        overlay = props.overlay,
        visible = props.visible,
        onVisibleChange = props.onVisibleChange,
        customGetContainer = props.getContainer;

  const _useState = useState(defaultOpen),
        _useState2 = _slicedToArray(_useState, 2),
        show = _useState2[0],
        setShow = _useState2[1];

  const changeVisible = show => {
    setShow(show);
    onVisibleChange(show);
  };

  const onMouseEnter = trigger === "hover" ? () => changeVisible(true) : null;
  const onMouseLeave = trigger === "hover" ? () => changeVisible(false) : null;
  const onWindowClick = trigger === "click" ? () => changeVisible(false) : null;
  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });
  useEffect(() => {
    setShow(visible);
  }, [visible]);
  const getContainer = customGetContainer || getDefaultPortalSelector();
  const ref = useRef();

  const _useDropdownPosition = useDropdownPosition(ref, getContainer),
        _useDropdownPosition2 = _slicedToArray(_useDropdownPosition, 1),
        position = _useDropdownPosition2[0];

  const classes = classNames("dropdown", className, {
    open: show,
    disabled
  });
  const overlayCls = classNames("dropdown-overlay", {
    open: show
  });
  const container = getContainer(ref.currrent) || document.body;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      ref: ref,
      onClick: e => e.stopPropagation()
    },
    /*#__PURE__*/
    cloneElement(children, {
      onClick: trigger === "click" && !disabled ? e => {
        e.stopPropagation();
        changeVisible(!show);
      } : null
    }),
    /*#__PURE__*/
    createPortal(
    /*#__PURE__*/
    React.createElement("div", {
      className: overlayCls,
      style: {
        left: position.left,
        top: position.top,
        minWidth: position.width
      }
    }, overlay), container))
  );
}

Dropdown.defaultProps = {
  trigger: "click",
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

  /** 展开收起的回调 */
  onVisibleChange: PropTypes.func
};
export default Dropdown;