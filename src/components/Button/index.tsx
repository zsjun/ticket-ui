import React, { FC, memo } from "react";
import classNames from "classnames";
import { Button } from "antd";
export type ButtonType = "primary" | "default" | "text" | "disabled";
export interface BaseButtonProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  type: ButtonType;
}
// export type defaultButtonProps = BaseButtonProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'stonewise-ui'
 * ~~~
 */
export const DefaultButton: FC<BaseButtonProps> = (props) => {
  const { className = "", children, type = "default", ...restProps } = props;
  // btn、btn-lg、btn-primary
  const classes = classNames(`button-wrap-${type}`, className, {
    [`button-${type}`]: false,
  });
  return (
    <div className={classes}>
      <Button {...restProps}>{children}</Button>
    </div>
  );
};

// Button.defaultProps = {
//   className: "",
// };

export default memo(DefaultButton);
