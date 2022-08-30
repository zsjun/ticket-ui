import React, { memo } from "react";
import get from "lodash/get";
import cx from "classnames";
import { nfn } from "../../common";

export function Column ({
  data,
  index,
  rowIndex,
  open,
  lineHeight,
  checked,
  config = {}
}) {
  const {
    key,
    render,
    align,
    limit,
    width,
    colSpanFn,
    rowSpanFn,
    style = {},
    className
  } = config;
  const cls = cx("table-row-item", className, {
    pdl10: true,
    pdr10: true,
    limit
  });
  const columnData = get(data, key);
  const content = render
    ? render(columnData, data, {
      rowIndex,
      columnIndex: index,
      expandShow: open,
      checked
    })
    : columnData;
  let colSpan = 1;
  let rowSpan = 1;

  if (colSpanFn) {
    colSpan = colSpanFn(columnData, data, {
      rowIndex,
      columnIndex: index,
      expandShow: open,
      checked
    });
  }

  if (rowSpanFn) {
    rowSpan = rowSpanFn(columnData, data, {
      rowIndex,
      columnIndex: index,
      expandShow: open,
      checked
    });
  }

  if (content === null) {
    return null;
  }

  // 当rowSpan = 0 时，视为合并
  if (rowSpan === 0) {
    return null;
  }

  return (
    <td
      className={cls}
      colSpan={colSpan}
      rowSpan={rowSpan}
      style={{
        height: lineHeight,
        textAlign: align || "center",
        maxWidth: width,
        ...style
      }}
    >{content}</td>
  );
}

function Row ({
  columns,
  data,
  index,
  active,
  open,
  className,
  lineHeight,
  striped,
  onClick,
  checked,
  setRowClassFn,
  totalData,
  selectRowBgColor,
  ...others
}) {
  const cls = cx(
    "table-body-row",
    className,
    {
      active,
      striped,
      checked,
    },
    setRowClassFn ? setRowClassFn(data) : false
  );
  const onRowClick = () => onClick(data, index, totalData);
  const columnProps = {
    data,
    rowIndex: index,
    lineHeight,
    open,
  };

  return (
    <tr
      className={cls}
      onClick={onRowClick}
      style={{
        height: lineHeight,
        backgroundColor: checked && selectRowBgColor,
      }}
    >
      {columns.map((column, i) => (
        <Column
          key={`table-row-item-${index}-${i}`}
          {...columnProps}
          config={column}
          checked={checked}
          index={i}
        />
      ))}
    </tr>
  );
}

Row.defaultProps = {
  onClick: nfn,
};

export default memo(Row);
