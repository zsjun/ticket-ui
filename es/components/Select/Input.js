function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useRef, useEffect, Fragment } from "react";
import get from "lodash/get";
import map from "lodash/map";
import isEmpty from "lodash/isEmpty";
import AutoSizeInput from "react-input-autosize";
import { nfn } from "../../common";
import Item from "../Item";
import Icon from "../Icon";
import ValueItem from "./ValueItem";
import delIcon from "./images/del_icon.svg";
export default function Input({
  disabled,
  showOption,
  isFocus,
  currentValue,
  filter,
  onFocus = nfn,
  onBlur,
  onChange,
  onInputChange,
  multi,
  placeholder = "Select...",
  clearable,
  options,
  onPressEnter,
  onPressBack,
  setShow,
  setFocus
}) {
  const inputRef = useRef(null);

  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        input = _useState2[0],
        setInput = _useState2[1]; // 当currentValue改变时，认定为用户选中了选项，更改输入状态为false


  useEffect(() => {
    if (!multi) {
      setInput(false);
    } // 保持focus状态


    if (multi && isFocus) {
      inputRef.current.focus();
    }
  }, [currentValue]);

  const triggerFocus = e => {
    if (disabled) return;
    e.stopPropagation();
    inputRef.current.focus();
    onFocus();
  }; // 点击箭头


  const handleArrowClick = e => {
    if (showOption) {
      setShow(false);
      setFocus(false);
    } else {
      triggerFocus(e);
    }
  }; // filter改变的时候


  const handleValueChange = v => {
    const value = v.target.value;
    setInput(value === "" ? false : true);

    if (!showOption) {
      onFocus();
    }

    onInputChange(value);
  }; // 清除值


  const clearValue = e => {
    onChange({});
    onInputChange("");
    inputRef.current.focus();
  };

  const handleKeyDown = e => {
    e.stopPropagation();

    if (e.keyCode === 13) {
      return onPressEnter && onPressEnter();
    }

    if (e.keyCode === 8) {
      if (filter === "") {
        return onPressBack();
      }
    }
  };

  const hasValue = filter !== "" || !isEmpty(currentValue);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "Select-control"
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "Select-value-zone"
    },
    /*#__PURE__*/
    React.createElement(Item, {
      show: !hasValue,
      onClick: triggerFocus
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "Select-placeholder"
    }, placeholder)),
    /*#__PURE__*/
    React.createElement("div", {
      className: "Select-input",
      onClick: triggerFocus
    },
    /*#__PURE__*/
    React.createElement(Item, {
      show: !multi && !input
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "select-single-value"
    }, get(currentValue, "label"))),
    /*#__PURE__*/
    React.createElement(Item, {
      show: multi
    },
    /*#__PURE__*/
    React.createElement(Fragment, null, map(currentValue, item =>
    /*#__PURE__*/
    React.createElement(ValueItem, {
      onRemove: () => onChange(item, true),
      key: "select-multi-item-".concat(item.label, "-").concat(item.value),
      value: item,
      disabled: disabled
    })))),
    /*#__PURE__*/
    React.createElement(AutoSizeInput, {
      style: {
        verticalAlign: "top"
      },
      className: "select-input-dom",
      value: filter,
      ref: inputRef,
      onKeyDown: handleKeyDown,
      onChange: handleValueChange
    }))),
    /*#__PURE__*/
    React.createElement(Item, {
      show: clearable && hasValue
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "Select-clear-zone"
    },
    /*#__PURE__*/
    React.createElement(Icon, {
      onClick: clearValue,
      className: "del-icon",
      link: delIcon
    }))),
    /*#__PURE__*/
    React.createElement("span", {
      className: "Select-arrow-zone",
      onClick: handleArrowClick
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "bottomTriangle drop-down-icon "
    })))
  );
}