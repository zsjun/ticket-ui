function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { map, includes, filter, lowerCase, uniq, every, cloneDeep, isPlainObject } from "lodash";
import Item from "../Item";
import Input from "../Input";
import Checkbox from "../Checkbox";
import Button from "../Button";
import Box from "../Box";
import { nfn } from "../../common";
import "antd/dist/antd.css"; // import { Tree } from "antd";

import Tree from "antd/lib/tree/";
const CheckboxGroup = Checkbox.CheckboxGroup;

const mapValueToSource = (value, source) => {
  const _source = cloneDeep(source);

  _source[0].children = _source[0].children.map(item => {
    item.children = filter(item.children, item => includes(value, item.value));
    return item;
  });
  _source[0].children = filter(_source[0].children, item => item.children.length !== 0);
  return _source;
};

const mapSourceToValue = source => map(source, item => item.value);

function TransferList({
  withSearch,
  listItems,
  selected,
  render,
  onSelect,
  data
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

  const onTreeSelect = (selectedKeys, info) => {
    console.log(selectedKeys, info);
  };

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
    React.createElement(Tree, {
      checkable: true // defaultExpandedKeys={["0-0-0", "0-0-1"]}
      // defaultSelectedKeys={[]}
      ,
      defaultCheckedKeys: ["127.0.0.1"],
      onCheck: onTreeSelect // onSelect={onTreeSelect}
      //autoExpandParent={true}
      ,
      treeData: data
    })),
    /*#__PURE__*/
    React.createElement("ul", null))
  );
}

const getAllselected = (arr = []) => {
  let _arr = [];
  arr.forEach(element => {
    if (Array.isArray(element.children)) {
      const _list = element.children.map(item => item.value);

      _arr = _arr.concat(_list);
    }
  });
  return _arr;
};

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

  const allSelected = getAllselected(dataSource[0].children);
  useEffect(() => {
    if (!defaultValue) {
      setTarget(dataSource);
    } else {
      setTarget(mapValueToSource(defaultValue, dataSource));
    }
  }, [defaultValue, dataSource]); // 左侧list展示的内容

  const sourceList = targetList.length > 0 ? getAllselected(targetList[0].children) : []; // 控制左侧选中

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
      withSearch: withSearch,
      data: dataSource
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
      listItems: sourceList,
      selected: sourceSelected,
      onSelect: handleSourceSelect,
      render: render,
      withSearch: withSearch,
      data: targetList
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