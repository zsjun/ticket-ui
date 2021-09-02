function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import map from "lodash/map";
import filter from "lodash/filter";
import includes from "lodash/includes";
import Checkbox from "../Checkbox";
import DropDown from "../Dropdown";
import Icon from "../Icon";
import Button from "../Button";
import Input from "../Input";
import Item from "../Item";
import { useDefault } from "../../common/hooks";
import { nfn } from "../../common";
import closeIcon from "../DropdownInput/images/close.svg";
const CheckboxGroup = Checkbox.CheckboxGroup;

const Overlay = props => {
  const options = props.options,
        title = props.title,
        onChange = props.onChange,
        close = props.close,
        onEnsure = props.onEnsure,
        defaultValue = props.defaultValue,
        withSearch = props.withSearch,
        searchTxt = props.searchTxt,
        onSearch = props.onSearch;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "checkbox-select-content"
    },
    /*#__PURE__*/
    React.createElement("h3", {
      className: "checkbox-select-content-title"
    }, title),
    /*#__PURE__*/
    React.createElement(Item, {
      show: withSearch
    },
    /*#__PURE__*/
    React.createElement(Input, {
      isSearch: true,
      onChange: onSearch,
      className: "checkbox-select-search-input"
    })),
    /*#__PURE__*/
    React.createElement(CheckboxGroup, {
      className: "checkbox-select-content-checkbox",
      defaultValue: defaultValue,
      onChange: onChange
    }, map(searchTxt === "" ? options : filter(options, item => includes(item.label, searchTxt)), (item, index) =>
    /*#__PURE__*/
    React.createElement(Checkbox, {
      key: "".concat(item.label, "-").concat(index),
      label: item.label,
      value: item.value
    }))),
    /*#__PURE__*/
    React.createElement("div", {
      className: "checkbox-select-button-wrap"
    },
    /*#__PURE__*/
    React.createElement(Button, {
      type: "link",
      className: "left",
      onClick: () => onChange([])
    }, "\u6E05\u9664"),
    /*#__PURE__*/
    React.createElement(Button, {
      type: "link",
      onClick: close
    }, "\u5173\u95ED"),
    /*#__PURE__*/
    React.createElement(Button, {
      type: "secondary",
      onClick: onEnsure
    }, "\u786E\u5B9A")))
  );
};

export default function CheckboxSelect({
  defaultValue,
  defaultOpen,
  withSearch,
  onChange,
  title,
  options,
  onDelete,
  className,
  style,
  getContainer
}) {
  const _useDefault = useDefault(defaultValue),
        _useDefault2 = _slicedToArray(_useDefault, 2),
        value = _useDefault2[0],
        setValue = _useDefault2[1];

  const _useState = useState(""),
        _useState2 = _slicedToArray(_useState, 2),
        searchTxt = _useState2[0],
        setSearchTxt = _useState2[1];

  const _useState3 = useState(defaultOpen),
        _useState4 = _slicedToArray(_useState3, 2),
        visible = _useState4[0],
        setVisible = _useState4[1];

  const handleEnsure = useCallback(() => {
    onChange(value);
    setVisible(false);
  }, [onChange, value]);
  const handleSearch = useCallback(val => setSearchTxt(val), []);
  const handleSelectChange = useCallback(v => setValue(v), [setValue]);
  const handleClose = useCallback(() => setVisible(false), []);
  const valueStr = filter(options, item => value.includes(item.value)).map(item => item.label).join(",");
  const classes = classNames("checkbox-select-wrap", onDelete ? className + " can-delete" : className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes
    },
    /*#__PURE__*/
    React.createElement(DropDown, {
      visible: visible,
      onVisibleChange: setVisible,
      overlay:
      /*#__PURE__*/
      React.createElement(Overlay, {
        options: options,
        title: title,
        defaultValue: value,
        withSearch: withSearch,
        searchTxt: searchTxt,
        onSearch: handleSearch,
        onEnsure: handleEnsure,
        onChange: handleSelectChange,
        close: handleClose
      }),
      defaultOpen: defaultOpen,
      getContainer: getContainer
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "checkbox-select-result"
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "checkbox-select-result-label"
    }, title),
    /*#__PURE__*/
    React.createElement("p", {
      className: "checkbox-select-result-value",
      title: valueStr
    }, valueStr),
    /*#__PURE__*/
    React.createElement(Item, {
      show: onDelete
    },
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "close-icon",
      link: closeIcon,
      onClick: onDelete
    })))))
  );
}
CheckboxSelect.propTypes = {
  /** 选项列表，包含label, value字段 */
  options: PropTypes.array,

  /** 标题 */
  title: PropTypes.string,

  /** 默认值 */
  defaultValue: PropTypes.array,

  /** 回调事件 */
  onChange: PropTypes.func,

  /** 支持搜索 */
  withSearch: PropTypes.bool,

  /** 删除回调 */
  onDelete: PropTypes.func
};
CheckboxSelect.defaultProps = {
  withSearch: false,
  onDelete: null,
  onChange: nfn
};