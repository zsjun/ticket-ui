import React, { FC, memo } from "react";
import classNames from "classnames";

export type PopconfirmType = "danger" | "link";
interface BasePopconfirmProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultPopconfirmProps =BasePopconfirmProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Popconfirm } from 'stonewise-ui'
 * ~~~
 */
export const Popconfirm: FC<BasePopconfirmProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("popconfirm-wrap", className, {
    [`popconfirm`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Popconfirm.defaultProps = {
  className: "",
};

export default memo(Popconfirm);
