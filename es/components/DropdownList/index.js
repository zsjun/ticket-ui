function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import DropDown from "../Dropdown";
import classNames from "classnames";
import { useControlledInputs } from "../../common/hooks";
import find from "lodash/find";
import { nfn } from "../../common";

const mapDefaultToValue = (defaultValue, props) => {
  const listItems = props.listItems;
  const item = find(listItems, {
    value: defaultValue
  });
  return item ? item.value : "";
};

const mapValuetoValue = value => value;

function Overlay(props) {
  const listItems = props.listItems,
        changeValue = props.changeValue,
        value = props.value,
        handleChange = props.handleChange;
  return (
    /*#__PURE__*/
    React.createElement("ul", {
      className: "dropdown-list-content"
    }, listItems.filter(item => !changeValue || item.value !== value).map((item, index) => {
      const classes = classNames({
        "text-overflow": true,
        "dropdown-list-item": true,
        "dropdown-list-item-active": item.value === value,
        disabled: item.disabled
      });
      return (
        /*#__PURE__*/
        React.createElement("li", {
          className: classes,
          key: "label-".concat(index),
          onClick: () => item.disabled ? nfn : handleChange(item.value)
        }, item.label)
      );
    }))
  );
}
/**
 * 在Dropdown组件上封装的list组件
 */


function DropdownList(props) {
  const trigger = props.trigger,
        defaultValue = props.defaultValue,
        afterChange = props.afterChange,
        changeValue = props.changeValue,
        onChange = props.onChange,
        disabled = props.disabled,
        listItems = props.listItems,
        style = props.style,
        className = props.className,
        children = props.children,
        getContainer = props.getContainer;

  if (afterChange) {
    console.warn("afterChange目前已经不在使用，使用changeValue代替");
  }

  const _useState = useState(false),
        _useState2 = _slicedToArray(_useState, 2),
        visible = _useState2[0],
        setVisible = _useState2[1];

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue,
    props
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const item = find(listItems, item => item.value === value);
  const label = changeValue ? item ? item.label : children : children;
  const classes = classNames({
    "dropdown-list": true,
    disabled
  }, className);
  const handleItemClick = useCallback(value => {
    handleChange(value);
    setVisible(false);
  }, [handleChange]);
  return (
    /*#__PURE__*/
    React.createElement(DropDown, {
      visible: visible,
      onVisibleChange: setVisible,
      trigger: trigger,
      className: classes,
      disabled: disabled,
      style: style,
      getContainer: getContainer,
      overlay:
      /*#__PURE__*/
      React.createElement(Overlay, {
        listItems: listItems,
        changeValue: changeValue,
        value: value,
        handleChange: handleItemClick
      })
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "dropdown-trigger-item text-overflow"
    }, label))
  );
}

DropdownList.propTypes = {
  /** 触发展示的方式 */
  trigger: PropTypes.oneOf(["click", "hover"]),

  /** 列表内容 */
  listItems: PropTypes.array,

  /** 点击内容的回调事件 */
  onChange: PropTypes.func,

  /** 值改变时，是否改变点击按钮的内容 */
  changeValue: PropTypes.bool,

  /** 默认值 */
  defaultValue: PropTypes.any,

  /** 是否禁用 */
  disabled: PropTypes.bool
};
DropdownList.defaultProps = {
  onChange: nfn,
  changeValue: false
};
export default DropdownList;