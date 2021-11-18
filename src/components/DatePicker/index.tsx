import React, { FC, memo } from "react";
import classNames from "classnames";

export type DatePickerType = "danger" | "link";
interface BaseDatePickerProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultDatePickerProps =BaseDatePickerProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { DatePicker } from 'stonewise-ui'
 * ~~~
 */
export const DatePicker: FC<BaseDatePickerProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("datePicker-wrap", className, {
    [`datePicker`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

DatePicker.defaultProps = {
  className: "",
};

export default memo(DatePicker);
