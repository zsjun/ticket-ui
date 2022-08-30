function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { Fragment, useState, useEffect, useRef, useCallback, useMemo } from "react";
import cx from "classnames";
import update from "immutability-helper";
import ColGroup from "./ColGroup";
import Checkbox from "../Checkbox";
import slice from "lodash/slice";
import filter from "lodash/filter";
import includes from "lodash/includes";
import { first, nth } from "lodash";
import Item from "../Item";
import { nfn } from "../../common";
/**
 * 固定头部的处理，将header,body包裹为table
 */

export const withScrollHeight = Children => props => {
  const scrollHeight = props.scrollHeight,
        columns = props.columns,
        flatColumns = props.flatColumns,
        body = props.body,
        others = _objectWithoutProperties(props, ["scrollHeight", "columns", "flatColumns", "body"]);

  if (!scrollHeight) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      columns: columns,
      flatColumns: flatColumns
    }, others))
  );
  const cls = cx({
    "table-body-wrap": body
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: cls,
      style: {
        maxHeight: scrollHeight
      }
    },
    /*#__PURE__*/
    React.createElement("table", null,
    /*#__PURE__*/
    React.createElement(ColGroup, {
      columns: flatColumns || columns
    }),
    /*#__PURE__*/
    React.createElement(Children, _extends({
      columns: columns,
      flatColumns: flatColumns
    }, others))))
  );
};
/**
 * 带静态分页的表格
 */

export const withLimit = Children => (_ref) => {
  let data = _ref.data,
      pageLimit = _ref.pageLimit,
      others = _objectWithoutProperties(_ref, ["data", "pageLimit"]);

  if (!pageLimit) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: data
    }, others))
  );

  const getListByPage = page => {
    return slice(data, 0, pageLimit * page);
  };

  const _useState = useState(1),
        _useState2 = _slicedToArray(_useState, 2),
        page = _useState2[0],
        setPage = _useState2[1];

  const _useState3 = useState(getListByPage(1)),
        _useState4 = _slicedToArray(_useState3, 2),
        list = _useState4[0],
        setList = _useState4[1];

  useEffect(() => {
    setPage(1);
    setList(getListByPage(1));
  }, [data, getListByPage]);
  const hasMore = data.length > list.length;
  const showMore = useCallback(() => {
    setPage(page + 1);
    setList(getListByPage(page + 1));
  }, [page, getListByPage]);
  return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: list,
      hasMore: hasMore,
      showMore: showMore
    }, others))
  );
};
export const withExpand = Children => (_ref2) => {
  let data = _ref2.data,
      expandRowRender = _ref2.expandRowRender,
      defaultRenderExpand = _ref2.defaultRenderExpand,
      expandOnly = _ref2.expandOnly,
      defaultRenderExpandIndex = _ref2.defaultRenderExpandIndex,
      others = _objectWithoutProperties(_ref2, ["data", "expandRowRender", "defaultRenderExpand", "expandOnly", "defaultRenderExpandIndex"]);

  if (!expandRowRender) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: data
    }, others))
  );

  const getDefaultExpand = () => {
    if (defaultRenderExpand) {
      return [first(data)];
    }

    if (!defaultRenderExpand && defaultRenderExpandIndex >= 0 && defaultRenderExpandIndex < data.length) {
      return [nth(data, defaultRenderExpandIndex)];
    }

    return [];
  };

  const _useState5 = useState(getDefaultExpand()),
        _useState6 = _slicedToArray(_useState5, 2),
        expandRow = _useState6[0],
        setExpandRow = _useState6[1];

  const _useState7 = useState(1),
        _useState8 = _slicedToArray(_useState7, 2),
        expandFlag = _useState8[0],
        setExpandFlag = _useState8[1];

  useEffect(() => {
    setExpandRow(getDefaultExpand());
  }, [defaultRenderExpandIndex]);
  const handleExpandChange = useCallback((row, open) => {
    if (expandOnly) {
      return setExpandRow(open ? [row] : []);
    }

    if (open) {
      setExpandRow(expandRow => [...expandRow, row]);
    } else {
      setExpandRow(expandRow => filter(expandRow, rowData => row !== rowData));
    }
  }, [expandOnly]);
  return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: data,
      expandRowRender: expandRowRender,
      expandRow: expandRow,
      handleExpandChange: handleExpandChange
    }, others))
  );
};
export const withExpandRow = Children => (_ref3) => {
  let data = _ref3.data,
      index = _ref3.index,
      columns = _ref3.columns,
      expandRowRender = _ref3.expandRowRender,
      expandRow = _ref3.expandRow,
      handleExpandChange = _ref3.handleExpandChange,
      className = _ref3.className,
      onClick = _ref3.onClick,
      others = _objectWithoutProperties(_ref3, ["data", "index", "columns", "expandRowRender", "expandRow", "handleExpandChange", "className", "onClick"]);

  if (!expandRowRender) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      columns: columns,
      index: index,
      data: data,
      onClick: onClick
    }, others))
  );
  const showExpand = includes(expandRow, data);
  const handleRowClick = useCallback((rowData, index) => {
    expandRowRender && handleExpandChange(rowData, !showExpand);
    onClick && onClick(rowData, index, showExpand);
  }, [showExpand, onClick, handleExpandChange]);
  const cls = cx({
    "has-expand": expandRowRender,
    "show-expand": showExpand
  }, className);
  return (
    /*#__PURE__*/
    React.createElement(Fragment, null,
    /*#__PURE__*/
    React.createElement(Children, _extends({
      columns: columns,
      className: cls,
      index: index,
      data: data,
      open: showExpand,
      onClick: handleRowClick
    }, others)),
    /*#__PURE__*/
    React.createElement(Item, {
      show: showExpand
    },
    /*#__PURE__*/
    React.createElement("tr", {
      className: "table-body-expand-row",
      key: "expand-row-".concat(index)
    },
    /*#__PURE__*/
    React.createElement("td", {
      colSpan: columns.length
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "table-body-expand-row-wrap"
    }, expandRowRender(data, index, columns, showExpand))))))
  );
};
/**
 * 单选表格
 */

export const withClick = Children => (_ref4) => {
  let clickable = _ref4.clickable,
      handleRowClick = _ref4.handleRowClick,
      data = _ref4.data,
      others = _objectWithoutProperties(_ref4, ["clickable", "handleRowClick", "data"]);

  if (!clickable) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: data
    }, others))
  );

  const _useState9 = useState(0),
        _useState10 = _slicedToArray(_useState9, 2),
        activeIndex = _useState10[0],
        setActive = _useState10[1];

  useEffect(() => {
    handleRowClick(data[0], 0);
  }, [data, handleRowClick]);
  const onClick = useCallback((rowData, index) => {
    setActive(index);
    handleRowClick(rowData);
  }, [handleRowClick]);
  return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      data: data
    }, others, {
      activeIndex: activeIndex,
      onClick: onClick
    }))
  );
};
/**
 * 带多选的表格
 */

export const withSelect = Children => (_ref5) => {
  let select = _ref5.select,
      data = _ref5.data,
      columns = _ref5.columns,
      _ref5$handleSelectCha = _ref5.handleSelectChanged,
      handleSelectChanged = _ref5$handleSelectCha === void 0 ? nfn : _ref5$handleSelectCha,
      others = _objectWithoutProperties(_ref5, ["select", "data", "columns", "handleSelectChanged"]);

  if (!select) return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      columns: columns,
      data: data
    }, others))
  );

  const _useState11 = useState([]),
        _useState12 = _slicedToArray(_useState11, 2),
        selected = _useState12[0],
        setSelect = _useState12[1];

  const selectRef = useRef(selected);

  const setSelected = arr => {
    setSelect(arr);
    selectRef.current = arr;
    handleSelectChanged(arr);
  };

  const handleSelectAll = checked => {
    if (checked) {
      setSelected(data);
    } else {
      setSelected([]);
    }
  };

  const handleSelectRow = (checked, row) => {
    const selected = selectRef.current;

    if (checked) {
      setSelected([...selected, row]);
    } else {
      setSelected(filter(selected, item => item !== row));
    }
  };

  const beforeRow = {
    key: "",
    title:
    /*#__PURE__*/
    React.createElement(Checkbox, {
      label: "\u5168\u9009",
      defaultChecked: selected.length === data.length,
      onChange: handleSelectAll
    }),
    width: 60,
    render: (item, row, others) => {
      const checked = others.checked;
      return (
        /*#__PURE__*/
        React.createElement(Checkbox, {
          defaultChecked: checked,
          onChange: checked => handleSelectRow(checked, row)
        })
      );
    }
  };
  const withSelectColumns = useMemo(() => [beforeRow, ...columns], [columns]);
  return (
    /*#__PURE__*/
    React.createElement(Children, _extends({
      selected: selected,
      columns: withSelectColumns,
      data: data
    }, others))
  );
};
const transfer = {
  data: new Map(),

  set(key, data) {
    this.data.set(key, data);
  },

  get(key) {
    return this.data.get(key);
  },

  clear() {
    this.data.clear();
  }

}; // 带拖拽的行

export const withDragRow = Row => (_ref6) => {
  let draggable = _ref6.draggable,
      index = _ref6.index,
      data = _ref6.data,
      totalData = _ref6.totalData,
      setData = _ref6.setData,
      handleDragChange = _ref6.handleDragChange,
      others = _objectWithoutProperties(_ref6, ["draggable", "index", "data", "totalData", "setData", "handleDragChange"]);

  if (!draggable || draggable && index === totalData.length - 1) return (
    /*#__PURE__*/
    React.createElement(Row, _extends({
      index: index,
      data: data
    }, others))
  );

  const _useState13 = useState({}),
        _useState14 = _slicedToArray(_useState13, 2),
        rowOver = _useState14[0],
        setRowOver = _useState14[1];

  const onDragStart = useCallback(e => {
    e.dataTransfer.effectAllowed = "move";
    transfer.set("data", data);
    transfer.set("index", index);
    e.target.style.opacity = 0.4;
    e.target.style.background = "#fff";
  }, [data, index]);
  const onDragEnd = useCallback(e => {
    e.target.style.opacity = 1;
    e.target.style.background = "#fff";
    transfer.clear();
  }, []);
  const onDragOver = useCallback(e => {
    e.preventDefault();
    setRowOver({
      borderBottom: "3px solid #3c8ff7"
    });
  }, [index]);
  const onDragEnter = useCallback(e => {
    e.preventDefault();
    setRowOver({
      borderBottom: "3px solid #3c8ff7"
    });
  }, [index]);
  const onDragLeave = useCallback(e => {
    e.preventDefault();
    setRowOver();
  }, [index]);
  const onDrop = useCallback(e => {
    const from = transfer.get("data");
    const fromIndex = transfer.get("index");
    setRowOver();

    if (from && fromIndex !== index) {
      const resultData = update(totalData, {
        $splice: [[fromIndex, 1], [index, 0, from]]
      });
      setData(resultData);
      handleDragChange(resultData, fromIndex, index);
    }

    transfer.clear();
  }, [handleDragChange, index, setData, totalData]);
  return (
    /*#__PURE__*/
    React.createElement(Row, _extends({
      draggable: "true",
      data: data,
      index: index,
      onDragStart: onDragStart,
      onDragEnd: onDragEnd,
      onDragOver: onDragOver,
      onDragLeave: onDragLeave,
      onDrop: onDrop,
      style: rowOver
    }, others))
  );
};