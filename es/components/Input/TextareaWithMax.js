function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2018-01-18 17:51:18
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-03-27 13:56:39
 */
import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { useControlledInputs } from "../../common/hooks";
export default function Textarea(props) {
  const defaultValue = props.defaultValue,
        onChange = props.onChange,
        max = props.max,
        className = props.className,
        error = props.hasError,
        disabled = props.disabled,
        style = props.style,
        placeholder = props.placeholder,
        isSearch = props.isSearch,
        others = _objectWithoutProperties(props, ["defaultValue", "onChange", "max", "className", "hasError", "disabled", "style", "placeholder", "isSearch"]);

  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        focus = _useState2[0],
        setFocus = _useState2[1];

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue: v => v,
    mapValuetoValue: e => e.target.innerText
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const inputEl = useRef(null);
  useEffect(() => {
    inputEl && !focus && (inputEl.current.innerText = defaultValue);
  }, [defaultValue, focus]);
  const classes = classNames("input", "textarea", "textarea-wrap", className, {
    error,
    "is-disabled": disabled,
    focus
  });
  return (
    /*#__PURE__*/
    React.createElement("div", _extends({
      className: classes
    }, others),
    /*#__PURE__*/
    React.createElement("div", {
      style: style,
      contentEditable: disabled ? "false" : "true",
      className: "textarea-content",
      onInput: handleChange,
      onFocus: () => setFocus(true),
      onBlur: () => setFocus(false),
      placeholder: placeholder,
      ref: inputEl
    }),
    /*#__PURE__*/
    React.createElement("span", {
      className: "max"
    },
    /*#__PURE__*/
    React.createElement("i", null, value.length), "/", max))
  );
}