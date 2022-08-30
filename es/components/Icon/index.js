function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2017-12-15 11:00:11
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-01-17 17:52:07
 */
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
/**
 * icon的基本封装
 */

function Icon(props) {
  const link = props.link,
        _props$className = props.className,
        className = _props$className === void 0 ? "" : _props$className,
        style = props.style,
        others = _objectWithoutProperties(props, ["link", "className", "style"]);

  const classes = classnames("icon", className);
  return (
    /*#__PURE__*/
    React.createElement("svg", _extends({
      className: classes
    }, others, {
      style: style
    }),
    /*#__PURE__*/
    React.createElement("use", {
      xlinkHref: link
    }))
  );
}

Icon.propTypes = {
  /** svg的路径 */
  link: PropTypes.string.isRequired
};
export default Icon;