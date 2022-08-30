function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { memo, useState } from "react";
import map from "lodash/map";
import includes from "lodash/includes";
import compose from "lodash/fp/compose";
import BaseRow from "./Row";
import Item from "../Item";
import { withScrollHeight, withExpandRow, withDragRow } from "./helper";
const Row = compose(withExpandRow, withDragRow, memo)(BaseRow);

function Body(_ref) {
  let columns = _ref.columns,
      data = _ref.data,
      lineHeight = _ref.lineHeight,
      hasMore = _ref.hasMore,
      showMore = _ref.showMore,
      activeIndex = _ref.activeIndex,
      selected = _ref.selected,
      others = _objectWithoutProperties(_ref, ["columns", "data", "lineHeight", "hasMore", "showMore", "activeIndex", "selected"]);

  return (
    /*#__PURE__*/
    React.createElement("tbody", {
      className: "table-body"
    }, map(data, (row, index) =>
    /*#__PURE__*/
    React.createElement(Row, _extends({
      key: "table-row-".concat(index),
      columns: columns,
      index: index,
      data: row,
      totalData: data,
      lineHeight: lineHeight,
      checked: includes(selected, row),
      active: activeIndex === index
    }, others))),
    /*#__PURE__*/
    React.createElement(Item, {
      show: hasMore
    },
    /*#__PURE__*/
    React.createElement("tr", {
      className: "table-body-row table-show-more",
      onClick: showMore,
      style: {
        height: lineHeight
      }
    },
    /*#__PURE__*/
    React.createElement("td", {
      colSpan: columns.length,
      style: {
        height: lineHeight
      }
    }, "\u663E\u793A\u66F4\u591A"))))
  );
}

export default withScrollHeight(Body);