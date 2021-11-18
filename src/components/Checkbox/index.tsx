import React, { FC, memo } from "react";
import classNames from "classnames";

export type CheckboxType = "danger" | "link";
interface BaseCheckboxProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultCheckboxProps =BaseCheckboxProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Checkbox } from 'stonewise-ui'
 * ~~~
 */
export const Checkbox: FC<BaseCheckboxProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("checkbox-wrap", className, {
    [`checkbox`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Checkbox.defaultProps = {
  className: "",
};

export default memo(Checkbox);
