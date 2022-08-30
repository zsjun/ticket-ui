function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import RadioButton from "../Radio/RadioButton";
import PropTypes from "prop-types";
import { btnTimeRange } from "./constant";
export default function RangeBtn(props) {
  const _props$currentLocale = props.currentLocale,
        currentLocale = _props$currentLocale === void 0 ? "zh_CN" : _props$currentLocale,
        max7d = props.max7d,
        others = _objectWithoutProperties(props, ["currentLocale", "max7d"]);

  return (
    /*#__PURE__*/
    React.createElement(RadioButton, _extends({
      options: btnTimeRange(currentLocale, max7d)
    }, others))
  );
}
RangeBtn.propTypes = {
  /** 是否最大为7天 */
  max7d: PropTypes.bool,

  /** 默认值, 'seven_days'时间区间 */
  defaultValue: PropTypes.string,

  /** 回调 */
  onChange: PropTypes.func
};