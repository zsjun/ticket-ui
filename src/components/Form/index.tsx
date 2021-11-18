import React, { FC, memo } from "react";
import classNames from "classnames";

export type FormType = "danger" | "link";
interface BaseFormProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultFormProps =BaseFormProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Form } from 'stonewise-ui'
 * ~~~
 */
export const Form: FC<BaseFormProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("form-wrap", className, {
    [`form`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Form.defaultProps = {
  className: "",
};

export default memo(Form);
