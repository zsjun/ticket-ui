function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: zsj
 * @Date: 2018-09-20 13:49:22
 * @Last Modified by: zsj
 * @Last Modified time: 2020-07-16 10:33:12
 */
import React, { useCallback } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import get from "lodash/get"; // 包含省市数据

import data from "./data";
import Select from "../Select/";
import { useControlledInputs } from "../../common/hooks";
const _province = data["省份"];
const _params = {
  province: "",
  city: ""
};
export default function AreaLinkage({
  defaultValue,
  onChange,
  mapDefaultToValue,
  mapValuetoValue,
  className,
  style
}) {
  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue: v => v,
    mapValuetoValue: v => v
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const onProviceChange = useCallback(val => {
    const result = {
      province: val,
      city: ""
    };
    handleChange(result);
    onChange(result);
  }, [onChange]);
  const onCityChange = useCallback(city => {
    const result = _objectSpread2(_objectSpread2({}, value), {}, {
      city
    });

    handleChange(result);
    onChange(result);
  }, [value, handleChange, onChange]);
  const classes = classNames("area-linkage", className);
  const cityOptions = get(data, value.province) || [];
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement(Select, {
      options: _province,
      onChange: onProviceChange,
      clearable: false,
      defaultValue: value.province,
      placeholder: "\u7701\u4EFD"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "area-linkage-mid"
    }),
    /*#__PURE__*/
    React.createElement(Select, {
      options: cityOptions,
      onChange: onCityChange,
      defaultValue: value.city,
      clearable: false,
      placeholder: "\u57CE\u5E02"
    }))
  );
}
AreaLinkage.displayName = "AreaLinkage";
AreaLinkage.defaultProps = {
  defaultValue: _params
};
AreaLinkage.propTypes = {
  /** 默认值 */
  defaultValue: PropTypes.object,

  /** 默认callback */
  onChange: PropTypes.func
};