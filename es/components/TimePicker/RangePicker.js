function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import { DatePicker as BaseDatePicker, LocaleProvider } from "antd";
import moment from "moment";
import { ranges, getStartAndEndTime } from "./constant";
import zhCN from "antd/es/locale-provider/zh_CN";
import { nfn } from "../../common";
import { useControlledInputs } from "../../common/hooks";
import { getDefaultPortalSelector } from "../../common/portalHelpers";
import isString from "lodash/isString";
const BaseRangePicker = BaseDatePicker.RangePicker;

const mapDefaultToValue = (defaultValue = "seven_days") => {
  if (Array.isArray(defaultValue)) {
    return defaultValue;
  }

  const ret = isString(defaultValue) ? getStartAndEndTime(defaultValue) : defaultValue;
  return [ret && ret.start ? moment(ret.start) : moment(new Date()), ret && ret.end ? moment(ret.end) : moment(new Date())];
};

const mapValuetoValue = value => ({
  start: +value[0],
  end: +value[1]
});
/**
 * 日期区间选择器
 * @see https://ant.design/components/date-picker-cn/
 */


function RangePicker(props) {
  const defaultValue = props.defaultValue,
        style = props.style,
        onChange = props.onChange,
        onOk = props.onOk,
        placeholder = props.placeholder,
        others = _objectWithoutProperties(props, ["defaultValue", "style", "onChange", "onOk", "placeholder"]);

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue,
    mapValueWhenChange: false
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const handleOk = value => {
    const v = mapValuetoValue(value);
    setTimeout(() => {
      onChange && onChange(v);
      onOk && onOk(v);
    }, 0);
  };

  return (
    /*#__PURE__*/
    React.createElement(LocaleProvider, {
      locale: zhCN
    },
    /*#__PURE__*/
    React.createElement(BaseRangePicker, _extends({
      allowClear: false,
      ranges: ranges,
      showTime: {
        format: "HH:mm"
      },
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        width: style.width || "100%"
      }),
      value: value,
      format: "YYYY-MM-DD HH:mm",
      onOk: handleOk,
      onChange: handleChange,
      getCalendarContainer: getDefaultPortalSelector()
    }, others)))
  );
}

RangePicker.defaultProps = {
  onChange: nfn,
  onOk: nfn,
  style: {}
};
RangePicker.propTypes = {
  /**
   * 两种方式的默认值
   * 1: string : [
   *   "one_hour",
   *   "twenty\_four_hours",
   *   "today",
   *   "seven_days",
   *   "thirty_days"
   * ]中的一种,
   * 2: {
   *   start, //时间戳
   *   end //时间戳
   * }
   */
  defaultValue: PropTypes.oneOfType([PropTypes.oneOf(["one_hour", "twenty_four_hours", "today", "seven_days", "thirty_days"]), PropTypes.shape({
    start: PropTypes.number,
    end: PropTypes.number
  })]),

  /** 回调，传入的值{ start, end } */
  onChange: PropTypes.func
};
export default RangePicker;