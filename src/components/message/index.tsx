import React, { FC, memo } from "react";
import classNames from "classnames";

export type messageType = "danger" | "link";
interface BasemessageProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultmessageProps =BasemessageProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { message } from 'stonewise-ui'
 * ~~~
 */
export const message: FC<BasemessageProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("message-wrap", className, {
    [`message`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

message.defaultProps = {
  className: "",
};

export default memo(message);
