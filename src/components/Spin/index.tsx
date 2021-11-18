import React, { FC, memo } from "react";
import classNames from "classnames";

export type SpinType = "danger" | "link";
interface BaseSpinProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultSpinProps =BaseSpinProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Spin } from 'stonewise-ui'
 * ~~~
 */
export const Spin: FC<BaseSpinProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("spin-wrap", className, {
    [`spin`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Spin.defaultProps = {
  className: "",
};

export default memo(Spin);
