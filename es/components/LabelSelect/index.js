import React, { useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import map from "lodash/map";
import includes from "lodash/includes";
import isEqual from "lodash/isEqual";
import filter from "lodash/filter";
import Label from "../Label";
import { useControlledInputs } from "../../common/hooks";
import Item from "../Item";

const mapDefaultToValue = (v, {
  options,
  multi
}) => {
  return v || (multi ? [] : options[0] ? "" : options[0].value);
};

const mapValuetoValue = v => v;
/**
 * 标签选择控件
 */


export default function LabelSelect({
  defaultValue,
  onChange,
  options,
  multi,
  disabled,
  showAll,
  className,
  style
}) {
  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue,
    props: {
      options,
      multi
    }
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const isAllSelected = value => !value.length || value.length === options.length;

  const getLabelType = active => active ? "info" : "";

  const selectAll = useCallback(() => {
    if (!multi || disabled) return;
    handleChange([]);
  }, [disabled, handleChange, multi]);

  const handleSelectChange = item => {
    if (multi) {
      const active = includes(value, item.value);
      let result = active ? filter(value, v => !isEqual(v, item.value)) : [...value, item.value];

      if (isAllSelected(result)) {
        result = [];
      }

      handleChange(result);
    } else {
      handleChange(item.value);
    }
  };

  const classes = classNames({
    "label-select": true,
    disabled
  }, className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement(Item, {
      show: multi && showAll
    },
    /*#__PURE__*/
    React.createElement(Label, {
      className: "label-select-item",
      onClick: selectAll,
      key: "all",
      type: getLabelType(isAllSelected(value))
    }, "\u5168\u90E8")), map(options, item => {
      const active = multi ? isAllSelected(value) ? false : includes(value, item.value) : isEqual(value, item.value);
      return (
        /*#__PURE__*/
        React.createElement(Label, {
          key: item.value,
          type: getLabelType(active),
          closable: active && multi,
          onClick: () => handleSelectChange(item, active),
          className: "label-select-item"
        }, item.label)
      );
    }))
  );
}
LabelSelect.defaultProps = {
  showAll: true,
  multi: false,
  locale: "zh_CN"
};
LabelSelect.propTypes = {
  /** 值改变时的回调 */
  onChange: PropTypes.func,

  /** 选项列表, 遵循各种选项的格式 { value, label } */
  options: PropTypes.array,

  /** 是否多选 */
  multi: PropTypes.bool,

  /** 是否自动展示 “全部” 标签 */
  showAll: PropTypes.bool,

  /** 国际化 */
  locale: PropTypes.string
};