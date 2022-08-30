function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import map from "lodash/map";
import get from "lodash/get";
import Item from "../Item";
import { Resizable } from "react-resizable";
import { withScrollHeight } from "./helper";

function SortIcon({
  column,
  handleSortChange,
  sortKey,
  sortFlag
}) {
  const change = sort => e => handleSortChange(column.key, sort, e);

  const active = sort => column.key === sortKey && sort === sortFlag ? "active" : "";

  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "table-sort-button"
    },
    /*#__PURE__*/
    React.createElement("span", {
      className: "topTriangle ".concat(active("asc")),
      onClick: change("asc")
    }),
    /*#__PURE__*/
    React.createElement("span", {
      className: "bottomTriangle ".concat(active("desc")),
      onClick: change("desc")
    }))
  );
}

function Header(_ref) {
  let columns = _ref.columns,
      setColumns = _ref.setColumns,
      resizeable = _ref.resizeable,
      handleResize = _ref.handleResize,
      others = _objectWithoutProperties(_ref, ["columns", "setColumns", "resizeable", "handleResize"]);

  // 是否包含二级标题
  const columnHasChild = column => get(column, "children.length"); // 二级标题


  const children = columns.reduce((total, cur) => total.concat(cur.children || []), []);
  const hasChild = children.length;
  return (
    /*#__PURE__*/
    React.createElement("thead", {
      className: "table-head"
    },
    /*#__PURE__*/
    React.createElement("tr", null, map(columns, (column, index) => {
      const title = column.title,
            sortable = column.sortable,
            width = column.width;
      const th =
      /*#__PURE__*/
      React.createElement("th", {
        rowSpan: columnHasChild(column) ? 1 : 2,
        colSpan: columnHasChild(column) || 1,
        key: "table-header-".concat(index),
        className: "table-head-item"
      }, title,
      /*#__PURE__*/
      React.createElement(Item, {
        show: sortable
      },
      /*#__PURE__*/
      React.createElement(SortIcon, _extends({
        column: column
      }, others))));
      if (!resizeable) return th;
      return (
        /*#__PURE__*/
        React.createElement(Resizable, {
          width: width,
          onResize: (e, {
            size
          }) => handleResize(index, size, columns, setColumns)
        }, th)
      );
    })),
    /*#__PURE__*/
    React.createElement(Item, {
      show: hasChild
    },
    /*#__PURE__*/
    React.createElement("tr", null, map(children, (column, index) => {
      const title = column.title,
            sortable = column.sortable;
      return (
        /*#__PURE__*/
        React.createElement("th", {
          key: "table-header-child-".concat(index),
          className: "table-head-item"
        }, title,
        /*#__PURE__*/
        React.createElement(Item, {
          show: sortable
        },
        /*#__PURE__*/
        React.createElement(SortIcon, _extends({
          column: column
        }, others))))
      );
    }))))
  );
}

export default withScrollHeight(Header);