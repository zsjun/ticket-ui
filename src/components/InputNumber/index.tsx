import React, { FC, memo } from "react";
import classNames from "classnames";

export type InputNumberType = "danger" | "link";
interface BaseInputNumberProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultInputNumberProps =BaseInputNumberProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { InputNumber } from 'stonewise-ui'
 * ~~~
 */
export const InputNumber: FC<BaseInputNumberProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("inputNumber-wrap", className, {
    [`inputNumber`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

InputNumber.defaultProps = {
  className: "",
};

export default memo(InputNumber);
