function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: wangweixin
 * @Date: 2018-01-18 17:52:04
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-06-19 16:11:19
 */
import React, { useState, useEffect, useRef, useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import includes from "lodash/includes";
import map from "lodash/map";
import filter from "lodash/filter";
import get from "lodash/get";
import Input from "../Select/Input";
import Options from "../Select/Options";
import { useControlledInputs, useDropdownPosition } from "../../common/hooks";
import { nfn } from "../../common"; // 设置默认显示的defaultValue

const mapDefaultToValue = value => value;

const mapValuetoValue = value => value;

export default function TipInput({
  defaultValue,
  onChange,
  hasError: error,
  options,
  disabled,
  className,
  style
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
        setShowTip = _useState2[1]; // 是否正在操控select


  const _useState3 = useState(false),
        _useState4 = _slicedToArray(_useState3, 2),
        isFocus = _useState4[0],
        setFocus = _useState4[1]; // 当前focus的选项，用户回车时，会选中该选项


  const _useState5 = useState(undefined),
        _useState6 = _slicedToArray(_useState5, 2),
        focusItem = _useState6[0],
        setFocusItem = _useState6[1];

  const ref = useRef();

  const _useDropdownPosition = useDropdownPosition(ref),
        _useDropdownPosition2 = _slicedToArray(_useDropdownPosition, 1),
        position = _useDropdownPosition2[0];

  const resultOptions = useMemo(() => filter(options, option => includes(option.label, value)), [value, options]);

  const onWindowClick = () => {
    setShowTip(false);
    setFocus(false);
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });

  const onFocus = () => setFocus(true);

  const filterOptions = value => filter(options, option => includes(option.label, value));
  /**
   * fitler改变的回调
   */


  const handleFilterChange = filterItem => {
    const options = filterOptions(filterItem);
    handleChange(filterItem);
    setShowTip(true);
    setFocusItem(options[0]);
  }; // 值更改时的回调


  const handleSelectChange = (val, remove) => {
    handleChange(get(val, "label"));
    setShowTip(false);
  };
  /**
   * 敲击回车时，认定选中当前focus的值
   */


  const onPressEnter = e => {
    if (focusItem) {
      handleChange(get(focusItem, "label"));
    }

    setShowTip(false); // if (includes(value, filterItem)) return;
    // if (filterItem === "" || filterItem === undefined) return;
    // handleSelectChange(filterItem);
    // setShowTip(false);
  };
  /**
   * 敲击后退时，清空值
   */


  const onPressBack = () => {// handleSelectChange(last(value), true);
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
      disabled: disabled,
      clearable: true,
      currentValue: map(value, item => ({
        label: item,
        value: item
      })),
      filter: value,
      onChange: nfn,
      onInputChange: handleFilterChange,
      onFocus: onFocus,
      showOption: showTip,
      onPressEnter: onPressEnter,
      onPressBack: onPressBack,
      isFocus: isFocus
    }),
    /*#__PURE__*/
    React.createElement(Options, {
      single: true,
      position: position,
      value: value,
      options: resultOptions,
      show: showTip,
      handleItemClick: handleSelectChange,
      filterItem: value,
      focusItem: focusItem,
      setFocusItem: setFocusItem
    }))
  );
}
TipInput.defaultProps = {
  onChange: nfn
};
TipInput.propTypes = {
  /** 错误状态 */
  hasError: PropTypes.bool,

  /** disabled状态 */
  disabled: PropTypes.bool,

  /** 默认值，必须是options中的value的值 */
  defaultValue: PropTypes.any,

  /** change回调 */
  onChange: PropTypes.func
};