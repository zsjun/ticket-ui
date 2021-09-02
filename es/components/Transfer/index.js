function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { map, includes, filter, lowerCase, uniq, every } from "lodash";
import Item from "../Item";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import Box from "../Box";
import { nfn } from "../../common";
const CheckboxGroup = Checkbox.CheckboxGroup;

const mapValueToSource = (value, source) => {
  return filter(source, item => includes(value, item.value));
};

const mapSourceToValue = source => map(source, item => item.value);

function TransferList({
  withSearch,
  listItems,
  selected,
  render,
  onSelect
}) {
  const _useState = useState(""),
        _useState2 = _slicedToArray(_useState, 2),
        filterItem = _useState2[0],
        setFilter = _useState2[1]; // 是否全部选中


  const allSelected = listItems.length === selected.length && selected.length !== 0; // 点击全部选中

  const handleAllSelectChange = checked => checked ? onSelect(mapSourceToValue(listItems)) : onSelect([]); // 搜索后的内容


  const filterdItems = filter(listItems, item => includes(lowerCase(item.label), filterItem)); // 选中全部搜索后的内容

  const handleFilterSelectChange = checked => checked ? onSelect(uniq([...selected, ...mapSourceToValue(filterdItems)])) : onSelect(filter(selected, item => includes(filterdItems, d => d.value !== item)));

  const allFilterSelected = every(filterdItems, item => includes(selected, item.value));
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-list"
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-list-title"
    },
    /*#__PURE__*/
    React.createElement(Checkbox, {
      defaultChecked: allSelected,
      indeterminate: selected.length && !allSelected,
      onChange: handleAllSelectChange
    }),
    /*#__PURE__*/
    React.createElement(Item, {
      show: selected.length
    }, selected.length, "/"), listItems.length, "\u9879"),
    /*#__PURE__*/
    React.createElement(Item, {
      show: withSearch
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-search-wrap"
    },
    /*#__PURE__*/
    React.createElement(Input, {
      isSearch: true,
      onChange: setFilter
    }))),
    /*#__PURE__*/
    React.createElement(Box, {
      data: listItems,
      className: "transfer-items-wrap"
    },
    /*#__PURE__*/
    React.createElement(Item, {
      show: filterItem && filterdItems.length
    },
    /*#__PURE__*/
    React.createElement(Checkbox, {
      defaultChecked: allFilterSelected,
      onChange: handleFilterSelectChange,
      label: "\u9009\u4E2D\u5168\u90E8\u7B5B\u9009\u5185\u5BB9"
    })),
    /*#__PURE__*/
    React.createElement(CheckboxGroup, {
      defaultValue: selected,
      onChange: onSelect
    }, map(filterItem === "" ? listItems : filterdItems, (item, index) =>
    /*#__PURE__*/
    React.createElement(Checkbox, {
      disabled: item.disabled,
      key: "".concat(item.label, "-").concat(index),
      label: render(item),
      className: "text-overflow",
      value: item.value
    })))),
    /*#__PURE__*/
    React.createElement("ul", null))
  );
}

function Transfer({
  className,
  defaultValue,
  dataSource,
  withSearch,
  onChange,
  operations,
  render
}) {
  const cls = cx("transfer", className); // 右侧list展示的内容

  const _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        targetList = _useState4[0],
        setTarget = _useState4[1];

  useEffect(() => {
    setTarget(mapValueToSource(defaultValue, dataSource));
  }, [defaultValue, dataSource]); // 左侧list展示的内容

  const sourceList = useMemo(() => filter(dataSource, item => !includes(targetList, item)), [dataSource, targetList]); // 控制左侧选中

  const _useState5 = useState([]),
        _useState6 = _slicedToArray(_useState5, 2),
        sourceSelected = _useState6[0],
        handleSourceSelect = _useState6[1]; // 控制右侧选中


  const _useState7 = useState([]),
        _useState8 = _slicedToArray(_useState7, 2),
        targetSelected = _useState8[0],
        handleTargetSelect = _useState8[1];

  const toRight = () => {
    const moved = mapValueToSource(sourceSelected, dataSource);
    const targetResultList = [...moved, ...targetList];
    setTarget(targetResultList);
    handleSourceSelect([]);
    onChange(mapSourceToValue(targetResultList), "right", moved);
  };

  const toLeft = () => {
    const moved = mapValueToSource(targetSelected, dataSource);
    const targetResultList = filter(targetList, item => !includes(moved, item));
    setTarget(targetResultList);
    handleTargetSelect([]);
    onChange(mapSourceToValue(targetResultList), "left", moved);
  };

  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: cls
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-list-wrap transter-left"
    },
    /*#__PURE__*/
    React.createElement(TransferList, {
      listItems: sourceList,
      selected: sourceSelected,
      onSelect: handleSourceSelect,
      render: render,
      withSearch: withSearch
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-controll-center"
    },
    /*#__PURE__*/
    React.createElement(Button, {
      type: "secondary",
      width: "50",
      onClick: toRight
    }, operations[0],
    /*#__PURE__*/
    React.createElement("i", {
      className: "icon-arrow"
    })),
    /*#__PURE__*/
    React.createElement(Button, {
      width: "50",
      onClick: toLeft
    }, operations[1],
    /*#__PURE__*/
    React.createElement("i", {
      className: "icon-arrow left"
    }))),
    /*#__PURE__*/
    React.createElement("div", {
      className: "transfer-list-wrap transter-right"
    },
    /*#__PURE__*/
    React.createElement(TransferList, {
      listItems: targetList,
      selected: targetSelected,
      onSelect: handleTargetSelect,
      render: render,
      withSearch: withSearch
    })))
  );
}

Transfer.propTypes = {
  /** 已选择的值，展示在右边 */
  defaultValue: PropTypes.array,

  /** 全部可选的值, 必须包含 { label, value } */
  dataSource: PropTypes.arrayOf(PropTypes.object),

  /** 变更时的回调, 回传已选value, direction, 未选value */
  onChange: PropTypes.func,

  /** 用于列表展示的丰富 */
  render: PropTypes.func,

  /** 禁用状态 */
  disabled: PropTypes.bool,

  /** 是否可筛选 */
  withSearch: PropTypes.bool,

  /** 中间操作框的文案 */
  operations: PropTypes.array
};
Transfer.defaultProps = {
  render: n => n.label,
  defaultValue: [],
  onChange: nfn,
  disabled: false,
  operations: ["添加", "移除"]
};
export default Transfer;