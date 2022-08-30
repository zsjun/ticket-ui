import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useControlledInputs } from "../../common/hooks";
const defaultMap = [{
  label: "关闭",
  value: false
}, {
  label: "开启",
  value: true
}];

const mapDefaultToValue = v => v;

const mapValuetoValue = v => v;
/**
 * 开关
 */


function Switch(props) {
  const defaultValue = props.defaultValue,
        onChange = props.onChange,
        _props$itemMap = props.itemMap,
        itemMap = _props$itemMap === void 0 ? defaultMap : _props$itemMap,
        className = props.className,
        disabled = props.disabled,
        style = props.style;

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const classes = classNames("switch", className, {
    active: value,
    disabled
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      style: style,
      className: classes,
      onClick: () => !disabled && handleChange(!value)
    }, itemMap.map(item => {
      return (
        /*#__PURE__*/
        React.createElement("span", {
          key: item.label,
          className: "switch-item"
        }, item.label)
      );
    }))
  );
}

Switch.propTypes = {
  /** 开关对应的Item和值 */
  itemMap: PropTypes.array,

  /** 变化回调 */
  onChange: PropTypes.func,

  /** 默认值 */
  defaultValue: PropTypes.bool
};
export default Switch;