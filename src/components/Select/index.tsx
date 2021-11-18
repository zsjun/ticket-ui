import React, { FC, memo } from "react";
import classNames from "classnames";

export type SelectType = "danger" | "link";
interface BaseSelectProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultSelectProps =BaseSelectProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Select } from 'stonewise-ui'
 * ~~~
 */
export const Select: FC<BaseSelectProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("select-wrap", className, {
    [`select`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Select.defaultProps = {
  className: "",
};

export default memo(Select);
