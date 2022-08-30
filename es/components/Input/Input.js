function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2018-01-18 17:50:52
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-03-04 15:51:57
 */
import React from "react";
import classNames from "classnames";
import Icon from "../Icon";
import searchIcon from "./images/search.svg";
export default function Input(props) {
  const value = props.value,
        handleChange = props.handleChange,
        isSearch = props.isSearch,
        type = props.type,
        error = props.hasError,
        className = props.className,
        others = _objectWithoutProperties(props, ["value", "handleChange", "isSearch", "type", "hasError", "className"]);

  const onChange = e => handleChange(e.target.value);

  const textarea = type === "textarea";
  const classes = classNames(className, {
    input: true,
    textarea,
    error
  });

  if (textarea) {
    return (
      /*#__PURE__*/
      React.createElement("textarea", _extends({
        value: value,
        onChange: onChange,
        className: classes,
        type: type
      }, others))
    );
  }

  if (isSearch) {
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: "input-wrapper"
      },
      /*#__PURE__*/
      React.createElement("input", _extends({
        value: value,
        onChange: onChange,
        className: classes,
        placeholder: isSearch ? "搜索相关内容" : "",
        type: type
      }, others)),
      /*#__PURE__*/
      React.createElement(Icon, {
        className: "search-icon",
        link: searchIcon
      }))
    );
  }

  return (
    /*#__PURE__*/
    React.createElement("input", _extends({
      value: value,
      onChange: onChange,
      className: classes,
      type: type
    }, others))
  );
}