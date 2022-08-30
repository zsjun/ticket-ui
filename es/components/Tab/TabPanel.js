function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

function TabPanel(props) {
  const children = props.children,
        active = props.active,
        className = props.className,
        defaultLoad = props.defaultLoad;

  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        shown = _useState2[0],
        setShown = _useState2[1];

  useEffect(() => {
    // 默认对非激活的tab不进行展示
    if (active && !shown) {
      setShown(true);
    }
  }, [active]);
  const classes = classNames("tab-panel", className, {
    active
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes
    }, shown && children || defaultLoad && children)
  );
}

TabPanel.propTypes = {
  /** 头部内容, 可以传入节点 */
  header: PropTypes.any,

  /** 特有的key */
  keys: PropTypes.string.isRequired,

  /** 是否active, 会被父组件自动传入，不用关心 */
  active: PropTypes.bool,

  /** 是否在初次加载的时候加载 */
  defaultLoad: PropTypes.bool,

  /** 是否禁用 */
  disabled: PropTypes.bool
};
export default TabPanel;