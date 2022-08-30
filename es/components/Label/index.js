function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import isString from "lodash/isString";
export default function Label(props) {
  const type = props.type,
        children = props.children,
        light = props.light,
        className = props.className,
        closable = props.closable,
        maxWidth = props.maxWidth,
        style = props.style,
        others = _objectWithoutProperties(props, ["type", "children", "light", "className", "closable", "maxWidth", "style"]);

  const classes = classNames("label", "label-".concat(type), {
    light,
    closable,
    "max-width": maxWidth
  }, className);

  const retStyle = _objectSpread2(_objectSpread2({}, style), {}, {
    maxWidth
  });

  return (
    /*#__PURE__*/
    React.createElement("span", _extends({
      className: classes,
      style: retStyle
    }, others, {
      title: isString(children) ? children : ""
    }), children)
  );
}
Label.propTypes = {
  /** 标签类型 */
  type: PropTypes.string,

  /** 轻版label */
  light: PropTypes.bool,

  /** 最大宽度，超出时会将内容以省略号显示 */
  maxWidth: PropTypes.number
};