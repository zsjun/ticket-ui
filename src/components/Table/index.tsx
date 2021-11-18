import React, { FC, memo } from "react";
import classNames from "classnames";

export type TableType = "danger" | "link";
interface BaseTableProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultTableProps =BaseTableProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Table } from 'stonewise-ui'
 * ~~~
 */
export const Table: FC<BaseTableProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("table-wrap", className, {
    [`table`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Table.defaultProps = {
  className: "",
};

export default memo(Table);
