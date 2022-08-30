function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: wangweixin
 * @Date: 2018-01-18 17:52:04
 * @Last Modified by: zsj
 * @Last Modified time: 2020-11-30 19:22:22
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";
import includes from "lodash/includes";
import filter from "lodash/filter";
import get from "lodash/get";
import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";
import last from "lodash/last";
import lowerCase from "lodash/lowerCase";
import Input from "./Input";
import Options from "./Options";
import PropTypes from "prop-types";
import { useControlledInputs, useDefault, useDropdownPosition } from "../../common/hooks";
import { nfn } from "../../common";
import { getDefaultPortalSelector } from "../../common/portalHelpers"; // 设置默认显示的defaultValue

const mapDefaultToValue = (value, props) => {
  const multi = props.multi,
        options = props.options; // 没传

  if (!value && value !== 0) {
    return multi ? [] : "";
  }

  return multi ? options.filter(item => value.indexOf(item.value) >= 0) : options.filter(item => item.value === value)[0];
};

const mapValuetoValue = (value, props) => {
  const multi = props.multi;
  return multi ? value.map(item => item.value) : value.value;
};

export default function Select({
  defaultValue,
  onChange,
  options,
  hasError: error,
  theme,
  multi,
  placeholder,
  disabled,
  clearable,
  className,
  style,
  getContainer: customGetContainer
}) {
  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue,
    mapValueWhenChange: false,
    props: {
      multi,
      options
    }
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange; // 是否展示选项


  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        showOption = _useState2[0],
        setShow = _useState2[1];

  const _useDefault = useDefault(options),
        _useDefault2 = _slicedToArray(_useDefault, 2),
        resultOptions = _useDefault2[0],
        setOptions = _useDefault2[1]; // 输入的值, 在select中对应为filter


  const _useState3 = useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        filterItem = _useState4[0],
        setFilter = _useState4[1]; // 当前focus的选项，用户回车时，会选中该选项


  const _useState5 = useState(undefined),
        _useState6 = _slicedToArray(_useState5, 2),
        focusItem = _useState6[0],
        setFocusItem = _useState6[1]; // 是否正在操控select


  const _useState7 = useState(false),
        _useState8 = _slicedToArray(_useState7, 2),
        isFocus = _useState8[0],
        setFocus = _useState8[1];

  const getContainer = customGetContainer || getDefaultPortalSelector();
  const ref = useRef();

  const _useDropdownPosition = useDropdownPosition(ref, getContainer),
        _useDropdownPosition2 = _slicedToArray(_useDropdownPosition, 1),
        position = _useDropdownPosition2[0];

  const onWindowClick = () => {
    setShow(false);
    setFocus(false);
  };

  useEffect(() => {
    window.addEventListener("click", onWindowClick);
    return () => window.removeEventListener("click", onWindowClick);
  });
  /**
   * 获取最新的options(会根据filter和多选的值改变)
   * @param {*} filterItem 当前的filter
   * @param {*} currentValue 针对于多选，会根据选中结果进行过滤
   */

  const getResultOptions = (filterItem = "", currentValue) => {
    const resultOptions = multi ? filter(options, item => !includes(currentValue || value, item)) : options;

    if (filterItem === "") {
      return resultOptions;
    }

    return filter(resultOptions, item => includes(lowerCase(item.label), filterItem) || includes(lowerCase(item.value), filterItem));
  };
  /**
   * 展示下拉菜单
   * 会更新focusItem
   */


  const showOptionsWrap = () => {
    const options = getResultOptions();

    if (!multi) {
      setFocusItem(value);
    } else {
      setFocusItem(options[0]);
    }

    setShow(true);
    setFocus(true);
  };
  /**
   * fitler改变的回调
   * 会更新options和focusItem
   */


  const handleFilterChange = (filterItem, currentValue) => {
    const resultOptions = getResultOptions(filterItem, currentValue);
    setFilter(filterItem);
    setOptions(resultOptions);
    setFocusItem(resultOptions[0]);
  }; // 选中值时的回调


  const handleSelectChange = (val, remove, hide = true) => {
    if (multi) {
      let resultVal; // val为空时，将内容清空

      if (isEmpty(val)) {
        resultVal = [];
      } else if (remove) {
        // 移除元素
        resultVal = filter(value, item => !isEqual(val, item));
      } else {
        resultVal = [...value, val];
      }

      handleChange(resultVal);
      handleFilterChange("", resultVal);
    } else {
      handleChange(val);
      handleFilterChange("");
    }

    if (hide) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  /**
   * 敲击回车时，认定选中当前focus的值
   */


  const onPressEnter = () => {
    if (!showOption || focusItem === undefined) return;

    if (focusItem.disabled) {
      return;
    }

    handleSelectChange(focusItem);
    setShow(false);
  };
  /**
   * 敲击后退时，清空值
   */


  const onPressBack = () => {
    // 单选时，清空
    if (!multi && !isEmpty(value)) {
      handleSelectChange({}, false, false);
    }

    if (multi && !isEmpty(value)) {
      handleSelectChange(last(value), true);
    }
  };

  const classes = classNames("select", className, theme, {
    multi,
    error,
    disabled,
    "is-open": showOption,
    "has-value": get(value, "length") || get(value, "value") !== undefined
  });
  const getContainerWithRef = useCallback(() => {
    return getContainer && getContainer(ref.current) || document.body;
  }, [getContainer]);
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
      multi: multi,
      clearable: clearable,
      options: options,
      currentValue: value,
      filter: filterItem,
      onChange: handleSelectChange,
      onInputChange: handleFilterChange,
      onFocus: showOptionsWrap,
      showOption: showOption,
      onPressEnter: onPressEnter,
      onPressBack: onPressBack,
      placeholder: placeholder,
      isFocus: isFocus,
      setShow: setShow,
      setFocus: setFocus
    }),
    /*#__PURE__*/
    React.createElement(Options, {
      single: true,
      position: position,
      value: value,
      multi: multi,
      options: resultOptions,
      show: showOption,
      handleItemClick: handleSelectChange,
      filterItem: filterItem,
      focusItem: focusItem,
      setFocusItem: setFocusItem,
      getContainer: getContainerWithRef
    }))
  );
}
Select.defaultProps = {
  theme: "default",
  clearable: true,
  onChange: nfn
};
Select.propTypes = {
  /** 是否是多选 */
  multi: PropTypes.bool,

  /**
   * 选项
   * {
   *   label: '标签',
   *   value: '值'
   * }
   */
  options: PropTypes.array,

  /** 错误状态 */
  hasError: PropTypes.bool,

  /** disabled状态 */
  disabled: PropTypes.bool,

  /** 是否可清空 */
  clearable: PropTypes.bool,

  /** 默认值，必须是options中的value的值 */
  defaultValue: PropTypes.any,

  /** change回调 */
  onChange: PropTypes.func,

  /** 可选主题颜色 default, white */
  theme: PropTypes.string
};