import React, { FC, memo } from "react";
import classNames from "classnames";
import { Button } from "antd";
export type ButtonType = "danger" | "link";
export interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultButtonProps = BaseButtonProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'stonewise-ui'
 * ~~~
 */
export const DefaultButton: FC<BaseButtonProps> = (props) => {
  const { className, children, ...restProps } = props;
  // btn、btn-lg、btn-primary
  const classes = classNames("button-wrap", className, {
    [`button`]: false,
  });
  return (
    <div className={classes}>
      <Button {...restProps}></Button>
    </div>
  );
};

Button.defaultProps = {
  className: "",
};

export default memo(Button);
