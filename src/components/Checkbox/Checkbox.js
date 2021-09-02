/*
 * @Author: wangweixin
 * @Date: 2017-12-15 11:02:00
 * @Last Modified by: wangweixin
 * @Last Modified time: 2020-03-25 14:25:23
 */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { nfn } from "../../common";
import Icon from "../Icon/index";
import iconChecked from "./images/checkbox_active.svg";
import iconBase from "./images/checkbox.svg";

export default function Checkbox({
  defaultChecked,
  onChange,
  label,
  value,
  key,
  indeterminate,
  disabled,
  className,
  style
}) {
  const inputRef = useRef(null);
  // 重置为controlled input
  const [checked, setChecked] = useState(defaultChecked);
  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);
  // 半开状态
  const [halfOpen, setHalfOpen] = useState(indeterminate);
  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
    setHalfOpen(indeterminate);
  }, [indeterminate]);

  const handleClick = e => {
    e.stopPropagation();
    if (disabled) return;
    // 半开状态 点击变成开
    if (halfOpen) {
      inputRef.current.indeterminate = false;
      const checked = true;
      setHalfOpen(false);
      setChecked(checked);
      onChange(checked, value, { checked });
      e.preventDefault();
    }
  };
  const handleChange = e => {
    const checked = e.target.checked;
    setChecked(checked);
    onChange(checked, value, { checked });
  };

  const classes = classNames("checkbox-label", className, {
    disabled,
    checked
  });

  return (
    <label
      unselectable="false"
      onClick={handleClick}
      key={key}
      className={classes}
      style={style}
    >
      <Icon className="checkbox-icon" link={checked ? iconChecked : iconBase} />
      <input
        ref={inputRef}
        className="checkbox"
        type="checkbox"
        checked={checked}
        value={value}
        disabled={disabled}
        onChange={handleChange}
      />
      {label}
    </label>
  );
}
Checkbox.defaultProps = {
  onChange: nfn,
  defaultChecked: false
};
Checkbox.propTypes = {
  /** checkbox标签描述 */
  label: PropTypes.string,
  /** 是否半选 */
  indeterminate: PropTypes.bool,
  /** 是否默认选中 */
  defaultChecked: PropTypes.bool,
  /** 该选项对应的值，会在onChange时传入回调 */
  value: PropTypes.any,
  /** 值更改时的回调 */
  onChange: PropTypes.func,
  /** 禁用状态 */
  disabled: PropTypes.bool
};
