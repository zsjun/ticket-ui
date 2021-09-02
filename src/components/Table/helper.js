import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useMemo
} from "react";
import cx from "classnames";
import update from "immutability-helper";
import ColGroup from "./ColGroup";
import Checkbox from "../Checkbox";

import slice from "lodash/slice";
import filter from "lodash/filter";
import includes from "lodash/includes";
import xor from "lodash/xor";
import { useUpdateEffect } from '../../common/hooks'
import { first, nth } from "lodash";

import Item from "../Item";
import { nfn } from "../../common";

/**
 * 固定头部的处理，将header,body包裹为table
 */
export const withScrollHeight = (Children, header = true) => props => {
  const { scrollHeight, columns, flatColumns, body, ...others } = props;

  if (!scrollHeight)
    return <Children columns={columns} flatColumns={flatColumns} {...others} />;

  const cls = cx({
    "table-body-wrap": body,
    "table-header-wrap": header
  });
  return (
    <div
      className={cls}
      style={{
        maxHeight: scrollHeight,
        paddingRight: scrollHeight && header ? 8 : 0
      }}
    >
      <table>
        <ColGroup columns={flatColumns || columns} />
        <Children columns={columns} flatColumns={flatColumns} {...others} />
      </table>
    </div>
  );
};

/**
 * 带静态分页的表格
 */
export const withLimit = Children => ({ data, pageLimit, ...others }) => {
  if (!pageLimit) return <Children data={data} {...others} />;

  const getListByPage = page => {
    return slice(data, 0, pageLimit * page);
  };

  const [page, setPage] = useState(1);
  const [list, setList] = useState(getListByPage(1));

  useUpdateEffect(() => {
      setPage(1);
      setList(getListByPage(1));
  }, [data]);

  const hasMore = data.length > list.length;
  const showMore = useCallback(() => {
    setPage(page + 1);
    setList(getListByPage(page + 1));
  }, [page, data]);

  return (
    <Children data={list} hasMore={hasMore} showMore={showMore} {...others} />
  );
};

export const withExpand = Children => ({
  data,
  expandRowRender,
  defaultRenderExpand,
  expandOnly,
  defaultRenderExpandIndex,
  ...others
}) => {
  if (!expandRowRender) return <Children data={data} {...others} />;

  const getDefaultExpand = () => {
    if (defaultRenderExpand) {
      return [first(data)];
    }
    if (
      !defaultRenderExpand &&
      defaultRenderExpandIndex >= 0 &&
      defaultRenderExpandIndex < data.length
    ) {
      return [nth(data, defaultRenderExpandIndex)];
    }
    return [];
  };
  const [expandRow, setExpandRow] = useState(getDefaultExpand());
  /*
	useEffect(() => {
		if (defaultRenderExpandIndex !== undefined) {
			setExpandRow(getDefaultExpand());
		}
	}, [defaultRenderExpandIndex]);
	*/

  // defaultRenderExpandIndex变化时重新展开
  useEffect(() => {
    if (
      defaultRenderExpandIndex !== undefined &&
      defaultRenderExpandIndex >= 0
    ) {
      setExpandRow([nth(data, defaultRenderExpandIndex)]);
    }
  }, [defaultRenderExpandIndex, data]);

  const handleExpandChange = useCallback(
    (row, open) => {
      if (expandOnly) {
        return setExpandRow(open ? [row] : []);
      }
      if (open) {
        setExpandRow(expandRow => [...expandRow, row]);
      } else {
        setExpandRow(expandRow =>
          filter(expandRow, rowData => row !== rowData)
        );
      }
    },
    [expandOnly]
  );

  return (
    <Children
      data={data}
      expandRowRender={expandRowRender}
      expandRow={expandRow}
      handleExpandChange={handleExpandChange}
      {...others}
    />
  );
};

export const withExpandRow = Children => ({
  data,
  index,
  columns,
  expandRowRender,
  expandRow,
  handleExpandChange,
  className,
  onClick,
  ...others
}) => {
  if (!expandRowRender)
    return (
      <Children
        columns={columns}
        index={index}
        data={data}
        onClick={onClick}
        {...others}
      />
    );

  const showExpand = includes(expandRow, data);

  const handleRowClick = useCallback(
    (rowData, index, totalData) => {
      expandRowRender && handleExpandChange(rowData, !showExpand);
      onClick && onClick(rowData, index, showExpand, totalData);
    },
    [showExpand, onClick, handleExpandChange]
  );

  const cls = cx(
    {
      "has-expand": expandRowRender,
      "show-expand": showExpand
    },
    className
  );

  return (
    <Fragment>
      <Children
        columns={columns}
        className={cls}
        index={index}
        data={data}
        open={showExpand}
        onClick={handleRowClick}
        {...others}
      />
      <Item show={showExpand}>
        <tr className="table-body-expand-row" key={`expand-row-${index}`}>
          <td colSpan={columns.length}>
            <div className="table-body-expand-row-wrap">
              {expandRowRender(data, index, columns, showExpand)}
            </div>
          </td>
        </tr>
      </Item>
    </Fragment>
  );
};

/**
 * 单选表格
 */
export const withClick = Children => ({
  clickable,
  defaultClick = true,
  handleRowClick,
  activeRowIndex,
  data,
  ...others
}) => {
  if (!clickable) return <Children data={data} {...others} />;

  const [activeIndex, setActive] = useState(defaultClick ? 0 : null);

  useEffect(() => {
    if (defaultClick && data[0]) {
      handleRowClick(data[0], 0);
    }
  }, [data, defaultClick, handleRowClick]);

  const onClick = useCallback(
    (rowData, index) => {
      setActive(index);
      handleRowClick(rowData, index);
    },
    [handleRowClick]
  );

  return (
    <Children
      data={data}
      {...others}
      activeIndex={activeRowIndex != null ? activeRowIndex : activeIndex}
      onClick={onClick}
    />
  );
};

/**
 * 带多选的表格
 */
export const withSelect = Children => ({
  select,
  data,
  columns,
  handleSelectChanged = nfn,
  ...others
}) => {
  if (!select) return <Children columns={columns} data={data} {...others} />;

  const [selected, setSelect] = useState([]);
  // const selectRef = useRef(selected);

  const setSelected = React.useCallback(
    arr => {
      setSelect(arr);
      // selectRef.current = arr;
      handleSelectChanged(arr);
    },
    [handleSelectChanged]
  );

  const handleSelectAll = React.useCallback(
    checked => {
      if (checked) {
        setSelected(data);
      } else {
        setSelected([]);
      }
    },
    [setSelected, data]
  );

  const handleSelectRow = React.useCallback(
    (checked, row) => {
      // const selected = seectRef.current;
      if (checked) {
        setSelected([...selected, row]);
      } else {
        setSelected(filter(selected, item => item !== row));
      }
    },
    [setSelected, selected]
  );

  const withSelectColumns = useMemo(
    () => [
      {
        key: "",
        title: (
          <Checkbox
            defaultChecked={
              selected.length > 0 &&
              selected.length === data.length &&
              xor(selected, data).length === 0
            }
            onChange={handleSelectAll}
          />
        ),
        width: 20,
        align: 'left',
        render: (item, row, others) => {
          const { checked } = others;
          return (
            <Checkbox
              defaultChecked={checked}
              onChange={checked => handleSelectRow(checked, row)}
            />
          );
        }
      },
      ...columns
    ],
    [selected, data, columns, handleSelectAll, handleSelectRow]
  );

  return (
    <Children
      selected={selected}
      columns={withSelectColumns}
      data={data}
      {...others}
    />
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
};

// 带拖拽的行
export const withDragRow = Row => ({
  draggable,
  index,
  data,
  totalData,
  setData,
  handleDragChange,
  ...others
}) => {
  if (!draggable || (draggable && index === totalData.length - 1))
    return <Row index={index} data={data} totalData={totalData} {...others} />;

  const onDragStart = useCallback(
    e => {
      e.dataTransfer.effectAllowed = "move";
      transfer.set("data", data);
      transfer.set("index", index);
    },
    [data, index]
  );

  const onDragEnd = useCallback(e => {
    transfer.clear();
  }, []);

  const onDragOver = useCallback(e => {
    e.preventDefault();
  }, []);

  const onDrop = useCallback(
    e => {
      const from = transfer.get("data");
      const fromIndex = transfer.get("index");

      if (from && fromIndex !== index) {
        const resultData = update(totalData, {
          $splice: [
            [fromIndex, 1],
            [index, 0, from]
          ]
        });
        setData(resultData);
        handleDragChange(resultData, fromIndex, index);
      }
    },
    [handleDragChange, index, setData, totalData]
  );

  return (
    <Row
      draggable="true"
      data={data}
      index={index}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
      onDrop={onDrop}
      {...others}
    />
  );
};
