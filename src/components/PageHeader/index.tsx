import React, { FC, memo } from "react";
import classNames from "classnames";

export type PageHeaderType = "danger" | "link";
interface BasePageHeaderProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultPageHeaderProps =BasePageHeaderProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { PageHeader } from 'stonewise-ui'
 * ~~~
 */
export const PageHeader: FC<BasePageHeaderProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("pageHeader-wrap", className, {
    [`pageHeader`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

PageHeader.defaultProps = {
  className: "",
};

export default memo(PageHeader);
