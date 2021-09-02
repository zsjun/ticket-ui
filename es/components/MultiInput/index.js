function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: wangweixin
 * @Date: 2018-01-18 17:52:04
 * @Last Modified by: zsj
 * @Last Modified time: 2020-04-07 18:36:36
 */
import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import includes from "lodash/includes";
import map from "lodash/map";
import filter from "lodash/filter";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import last from "lodash/last";
import toString from "lodash/toString";
import Input from "../Select/Input";
import { useControlledInputs, useDropdownPosition } from "../../common/hooks";
import { nfn } from "../../common";
import Item from "../Item"; // 设置默认显示的defaultValue

const mapDefaultToValue = (defaultValue = []) => defaultValue.map(toString);

const mapValuetoValue = value => value;

export default function MultiInput({
  defaultValue,
  onChange,
  hasError: error,
  disabled,
  className,
  style,
  placeholder
}) {
  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange; // 展示提示


  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showTip = _useState2[0],
        setShowTip = _useState2[1]; // 输入的值, 在select中对应为filter


  const _useState3 = useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        filterItem = _useState4[0],
        setFilter = _useState4[1]; // 是否正在操控select


  const _useState5 = useState(false),
        _useState6 = _slicedToArray(_useState5, 2),
        isFocus = _useState6[0],
        setFocus = _useState6[1];

  const ref = useRef();

  const _useDropdownPosition = useDropdownPosition(ref),
        _useDropdownPosition2 = _slicedToArray(_useDropdownPosition, 1),
        position = _useDropdownPosition2[0];

  const onWindowClick = () => {
    setShowTip(false);
    setFocus(false);
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });

  const onFocus = () => setFocus(true);
  /**
   * fitler改变的回调
   */


  const handleFilterChange = filterItem => {
    setFilter(filterItem);

    if (isEmpty(filterItem)) {
      return setShowTip(false);
    } // 当前的值不包含输入的值时，才提示可以按回车进行确定


    if (!includes(value, filterItem)) {
      setShowTip(true);
    } else {
      setShowTip(false);
    }
  }; // 值更改时的回调


  const handleSelectChange = (val, remove) => {
    let resultVal; // val为空时，将内容清空

    if (val === undefined) {
      resultVal = [];
    } else if (remove) {
      // 移除元素
      resultVal = filter(value, item => !isEqual(val, item));
    } else {
      resultVal = [...value, val];
    }

    handleChange(resultVal);
    handleFilterChange("", resultVal);
  };
  /**
   * 敲击回车时，认定选中当前focus的值
   */


  const onPressEnter = () => {
    if (includes(value, filterItem)) return;
    if (filterItem === "" || filterItem === undefined) return;
    handleSelectChange(filterItem);
    setShowTip(false);
  };
  /**
   * 敲击后退时，清空值
   */


  const onPressBack = () => {
    handleSelectChange(last(value), true);
  };

  const onValueChange = (value, remove) => {
    handleSelectChange(get(value, "value"), remove);
  };

  const classes = classNames("select", "no-arrow", className, {
    error,
    disabled,
    "is-open": isFocus,
    "has-value": get(value, "length")
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style,
      ref: ref
    },
    /*#__PURE__*/
    React.createElement(Input, {
      multi: true,
      disabled: disabled,
      clearable: true,
      currentValue: map(value, item => ({
        label: item,
        value: item
      })),
      placeholder: placeholder,
      filter: filterItem,
      onChange: onValueChange,
      onInputChange: handleFilterChange,
      onFocus: onFocus,
      showOption: showTip,
      onPressEnter: onPressEnter,
      onPressBack: onPressBack,
      isFocus: isFocus
    }),
    /*#__PURE__*/
    createPortal(
    /*#__PURE__*/
    React.createElement(Item, {
      show: showTip
    },
    /*#__PURE__*/
    React.createElement("div", {
      style: position,
      className: "multi-input-tip"
    }, filterItem, " \u9017\u53F7\u6216\u56DE\u8F66\u7ED3\u675F")), document.body))
  );
}
MultiInput.defaultProps = {
  onChange: nfn
};
MultiInput.propTypes = {
  /** 错误状态 */
  hasError: PropTypes.bool,

  /** disabled状态 */
  disabled: PropTypes.bool,

  /** 默认值，必须是options中的value的值 */
  defaultValue: PropTypes.any,

  /** change回调 */
  onChange: PropTypes.func
};