import React from "react";
import map from "lodash/map";
export default function ColGroup({
  columns
}) {
  return (
    /*#__PURE__*/
    React.createElement("colgroup", null, map(columns, (column, index) =>
    /*#__PURE__*/
    React.createElement("col", {
      key: "table-col-".concat(column.key, "-").concat(index),
      style: {
        width: column.width,
        minWidth: column.width
      }
    })))
  );
}