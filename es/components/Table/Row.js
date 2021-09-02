function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { memo } from "react";
import get from "lodash/get";
import cx from "classnames";
import { nfn } from "../../common";
export function Column({
  data,
  index,
  rowIndex,
  open,
  lineHeight,
  checked,
  config = {}
}) {
  const key = config.key,
        render = config.render,
        align = config.align,
        limit = config.limit,
        width = config.width,
        colSpanFn = config.colSpanFn;
  const cls = cx("table-row-item", {
    pdl10: align === "left",
    pdr10: align === "right",
    limit
  });
  const columnData = get(data, key);
  const content = render ? render(columnData, data, {
    rowIndex,
    columnIndex: index,
    expandShow: open,
    checked
  }) : columnData;
  let colSpan = 1;

  if (colSpanFn) {
    colSpan = colSpanFn(columnData, data);
  }

  if (content === null) {
    return "";
  }

  return (
    /*#__PURE__*/
    React.createElement("td", {
      className: cls,
      colSpan: colSpan,
      style: {
        height: lineHeight,
        textAlign: align || "center",
        maxWidth: width
      }
    }, content)
  );
}

function Row(_ref) {
  let columns = _ref.columns,
      data = _ref.data,
      index = _ref.index,
      active = _ref.active,
      open = _ref.open,
      className = _ref.className,
      lineHeight = _ref.lineHeight,
      striped = _ref.striped,
      onClick = _ref.onClick,
      checked = _ref.checked,
      others = _objectWithoutProperties(_ref, ["columns", "data", "index", "active", "open", "className", "lineHeight", "striped", "onClick", "checked"]);

  const cls = cx("table-body-row", className, {
    active,
    striped
  });

  let onRowClick = () => onClick(data, index);

  if (data.disableClick) {
    onRowClick = nfn;
  }

  const columnProps = {
    data,
    rowIndex: index,
    lineHeight,
    open
  };
  return (
    /*#__PURE__*/
    React.createElement("tr", _extends({
      className: cls,
      onClick: onRowClick,
      style: {
        height: lineHeight
      }
    }, others), columns.map((column, i) =>
    /*#__PURE__*/
    React.createElement(Column, _extends({
      key: "table-row-item-".concat(index, "-").concat(i)
    }, columnProps, {
      config: column,
      checked: checked,
      index: i
    }))))
  );
}

Row.defaultProps = {
  onClick: nfn
};
export default
/*#__PURE__*/
memo(Row);