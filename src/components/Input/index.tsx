import React, { FC, memo } from "react";
import classNames from "classnames";

export type InputType = "danger" | "link";
interface BaseInputProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultInputProps =BaseInputProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Input } from 'stonewise-ui'
 * ~~~
 */
export const Input: FC<BaseInputProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("input-wrap", className, {
    [`input`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Input.defaultProps = {
  className: "",
};

export default memo(Input);
