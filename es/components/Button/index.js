function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2017-12-07 17:12:42
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-04-10 14:29:32
 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import isNumber from "lodash/isNumber";
/**
 * 最基本的Button组件，使用时请以此组件为基准
 */

export default function Button(props) {
  const type = props.type,
        children = props.children,
        width = props.width,
        className = props.className,
        _props$style = props.style,
        style = _props$style === void 0 ? {} : _props$style,
        others = _objectWithoutProperties(props, ["type", "children", "width", "className", "style"]);

  const classes = classNames("btn btn-".concat(type), className);
  return (
    /*#__PURE__*/
    React.createElement("button", _extends({
      className: classes
    }, others, {
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        width: isNumber(width) ? width : width + "px"
      })
    }), children)
  );
}
Button.displayName = "Button";
Button.propTypes = {
  /** 按钮类型：默认类型, primary, secondary, cancel, link */
  type: PropTypes.string,

  /** 支持直接传宽度属性, 传200这样的，不要带单位 */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};