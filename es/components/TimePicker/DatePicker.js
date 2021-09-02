function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import { DatePicker as BaseDatePicker, LocaleProvider } from "antd";
import moment from "moment";
import zhCN from "antd/es/locale-provider/zh_CN";
import { nfn } from "../../common";
import { useControlledInputs } from "../../common/hooks";

const mapDefaultToValue = defaultValue => {
  return defaultValue ? moment(defaultValue) : null;
};

const mapValuetoValue = value => +value;
/**
 * 日期选择器,
 * 修改了默认值和onChange。
 * 其他的props见文档
 * @see https://ant.design/components/date-picker-cn/
 */


function DatePicker(props) {
  const defaultValue = props.defaultValue,
        onChange = props.onChange,
        others = _objectWithoutProperties(props, ["defaultValue", "onChange"]);

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue,
    mapValueWhenChange: false
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  return (
    /*#__PURE__*/
    React.createElement(LocaleProvider, {
      locale: zhCN
    },
    /*#__PURE__*/
    React.createElement(BaseDatePicker, _extends({
      value: value,
      format: "YYYY-MM-DD",
      onChange: handleChange
    }, others)))
  );
}

DatePicker.defaultProps = {
  onChange: nfn
};
DatePicker.propTypes = {
  /** 默认值，时间戳 */
  defaultValue: PropTypes.number,

  /** 回调，传入的值为时间戳 */
  onChange: PropTypes.func
};
export default DatePicker;