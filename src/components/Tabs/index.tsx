import React, { FC, memo } from "react";
import classNames from "classnames";

export type TabsType = "danger" | "link";
interface BaseTabsProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultTabsProps =BaseTabsProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Tabs } from 'stonewise-ui'
 * ~~~
 */
export const Tabs: FC<BaseTabsProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("tabs-wrap", className, {
    [`tabs`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Tabs.defaultProps = {
  className: "",
};

export default memo(Tabs);
