function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2017-12-15 11:02:29
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-03-04 16:28:10
 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
/**
 * 对Radio进行简单的封装
 * 并没有进行样式的修改
 */

export default function Radio(_ref) {
  let defaultChecked = _ref.defaultChecked,
      _onChange = _ref.onChange,
      label = _ref.label,
      value = _ref.value,
      disabled = _ref.disabled,
      className = _ref.className,
      others = _objectWithoutProperties(_ref, ["defaultChecked", "onChange", "label", "value", "disabled", "className"]);

  const classes = classNames("radio-label", className, {
    disabled
  });
  return (
    /*#__PURE__*/
    React.createElement("label", {
      key: "radio-label-".concat(value),
      className: classes
    },
    /*#__PURE__*/
    React.createElement("input", {
      className: "radio",
      type: "radio",
      checked: defaultChecked,
      value: value,
      disabled: disabled,
      onChange: e => _onChange(e.target.checked, value, {
        checked: e.target.checked
      })
    }), label)
  );
}
Radio.propTypes = {
  /** radio标签描述 */
  label: PropTypes.string,

  /** 是否默认选中 */
  defaultChecked: PropTypes.bool,

  /** 该选项对应的值，会在onChange时传入回调 */
  value: PropTypes.any,

  /** 值更改时的回调 */
  onChange: PropTypes.func,

  /** 禁用状态 */
  disabled: PropTypes.bool
};