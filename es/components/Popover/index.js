function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import BaseTooltip from "rc-tooltip";
/**
 * 气泡卡片
 */

function Popover(props) {
  const content = props.content,
        target = props.target,
        children = props.children,
        trigger = props.trigger,
        position = props.position,
        others = _objectWithoutProperties(props, ["content", "target", "children", "trigger", "position"]);

  return (
    /*#__PURE__*/
    React.createElement(BaseTooltip, _extends({
      prefixCls: "popover",
      animation: "zoom",
      trigger: trigger,
      overlay: content,
      arrowContent:
      /*#__PURE__*/
      React.createElement("div", {
        className: "popover-arrow-inner"
      }),
      placement: position
    }, others), target || children)
  );
}

Popover.defaultProps = {
  trigger: "hover",
  position: "right"
};
Popover.propTypes = {
  /** 气泡内容 */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  /** 触发气泡的元素，默认为children */
  target: PropTypes.element,

  /** 触发方式 */
  trigger: PropTypes.oneOf(["hover", "click"]),

  /** 内容的位置 */
  position: PropTypes.oneOf(["top", "right", "bottom", "left"])
};
export default Popover;