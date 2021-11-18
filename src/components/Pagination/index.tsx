import React, { FC, memo } from "react";
import classNames from "classnames";

export type PaginationType = "danger" | "link";
interface BasePaginationProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultPaginationProps =BasePaginationProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Pagination } from 'stonewise-ui'
 * ~~~
 */
export const Pagination: FC<BasePaginationProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("pagination-wrap", className, {
    [`pagination`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Pagination.defaultProps = {
  className: "",
};

export default memo(Pagination);
