function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * @Author: wangweixin
 * @Date: 2017-12-15 11:02:00
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-05-15 14:32:06
 */
import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { nfn } from "../../common";
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
  const inputRef = useRef(null); // 重置为controlled input

  const _useState = useState(defaultChecked),
        _useState2 = _slicedToArray(_useState, 2),
        checked = _useState2[0],
        setChecked = _useState2[1];

  useEffect(() => {
    if (defaultChecked !== checked) {
      setChecked(defaultChecked);
    }
  }, [defaultChecked]); // 半开状态

  const _useState3 = useState(indeterminate),
        _useState4 = _slicedToArray(_useState3, 2),
        halfOpen = _useState4[0],
        setHalfOpen = _useState4[1];

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate;
    setHalfOpen(indeterminate);
  }, [indeterminate]);

  const handleClick = e => {
    e.stopPropagation();
    if (disabled) return; // 半开状态 点击变成开

    if (halfOpen) {
      inputRef.current.indeterminate = false;
      const checked = true;
      setHalfOpen(false);
      setChecked(checked);
      onChange(checked, value, {
        checked
      });
      e.preventDefault();
    }
  };

  const handleChange = e => {
    const checked = e.target.checked;
    setChecked(checked);
    onChange(checked, value, {
      checked
    });
  };

  const classes = classNames("checkbox-label", className, {
    disabled
  });
  return (
    /*#__PURE__*/
    React.createElement("label", {
      unselectable: "false",
      onClick: handleClick,
      key: key,
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement("input", {
      ref: inputRef,
      className: "checkbox",
      type: "checkbox",
      checked: checked,
      value: value,
      disabled: disabled,
      onChange: handleChange
    }), label)
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