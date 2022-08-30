function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Input from "../Input";
import DropDown from "../Dropdown";
import Button from "../Button";
import { nfn } from "../../common";
import Icon from "../Icon";
import closeIcon from "./images/close.svg";

const Overlay = ({
  title,
  onChange,
  close,
  onEnsure,
  value
}) =>
/*#__PURE__*/
React.createElement("div", {
  className: "checkbox-select-content"
},
/*#__PURE__*/
React.createElement("h3", {
  className: "checkbox-select-content-title"
}, title),
/*#__PURE__*/
React.createElement(Input, {
  defaultValue: value,
  onChange: onChange
}),
/*#__PURE__*/
React.createElement("div", {
  className: "checkbox-select-button-wrap"
},
/*#__PURE__*/
React.createElement(Button, {
  type: "link",
  onClick: close
}, "\u5173\u95ED"),
/*#__PURE__*/
React.createElement(Button, {
  type: "secondary",
  onClick: onEnsure
}, "\u786E\u5B9A")));
/**
 * 下拉输入框
 */


export default function DropdownInput(props) {
  const defaultValue = props.defaultValue,
        defaultOpen = props.defaultOpen,
        onChange = props.onChange,
        title = props.title,
        onDelete = props.onDelete,
        disabled = props.disabled,
        trigger = props.trigger,
        className = props.className,
        style = props.style,
        getContainer = props.getContainer;

  const _useState = useState(defaultValue),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

  const _useState3 = useState(defaultValue),
        _useState4 = _slicedToArray(_useState3, 2),
        result = _useState4[0],
        setResult = _useState4[1];

  const _useState5 = useState(defaultOpen),
        _useState6 = _slicedToArray(_useState5, 2),
        visible = _useState6[0],
        setVisible = _useState6[1];

  useEffect(() => {
    if (value !== defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue, value]);
  const handleValueChange = useCallback(v => setValue(v), []);
  const handleEnsure = useCallback(() => {
    onChange(value);
    setResult(value);
    setVisible(false);
  }, [onChange, value]);

  const handleClear = () => {
    setValue("");

    if (onDelete) {
      onDelete();
    }
  };

  const handleClose = useCallback(() => {
    setVisible(false);
  }, []);
  const classes = classNames("checkbox-select-wrap", {
    "can-delete": onDelete
  }, className);
  return (
    /*#__PURE__*/
    React.createElement(DropDown, {
      visible: visible,
      onVisibleChange: setVisible,
      trigger: trigger,
      className: classes,
      disabled: disabled,
      style: style,
      getContainer: getContainer,
      overlay:
      /*#__PURE__*/
      React.createElement(Overlay, {
        title: title,
        close: handleClose,
        onChange: handleValueChange,
        onEnsure: handleEnsure,
        value: value
      })
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "checkbox-select-result"
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "checkbox-select-result-label"
    }, title),
    /*#__PURE__*/
    React.createElement("p", {
      className: "checkbox-select-result-value",
      title: result
    }, result), onDelete ?
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "close-icon",
      link: closeIcon,
      onClick: handleClear
    }) : ""))
  );
}
DropdownInput.defaultProps = {
  onChange: nfn,
  defaultOpen: false,
  clearable: true
};
DropdownInput.propTypes = {
  /** 是否默认打开 */
  defaultOpen: PropTypes.bool,

  /** 是否禁用 */
  disabled: PropTypes.bool,

  /** 触发显示的方式 */
  trigger: PropTypes.oneOf("click", "hover"),

  /** 标题 */
  title: PropTypes.string,

  /** 默认值 */
  defaultValue: PropTypes.any,

  /** 更改值时的回调 */
  onChange: PropTypes.func,
  onDelete: PropTypes.oneOfType([null, PropTypes.func])
};