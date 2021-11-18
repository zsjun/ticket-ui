import React, { FC, memo } from "react";
import classNames from "classnames";

export type DrawerType = "danger" | "link";
interface BaseDrawerProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultDrawerProps =BaseDrawerProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Drawer } from 'stonewise-ui'
 * ~~~
 */
export const Drawer: FC<BaseDrawerProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("drawer-wrap", className, {
    [`drawer`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Drawer.defaultProps = {
  className: "",
};

export default memo(Drawer);
