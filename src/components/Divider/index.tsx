import React, { FC, memo } from "react";
import classNames from "classnames";

export type DividerType = "danger" | "link";
interface BaseDividerProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultDividerProps =BaseDividerProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Divider } from 'stonewise-ui'
 * ~~~
 */
export const Divider: FC<BaseDividerProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("divider-wrap", className, {
    [`divider`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Divider.defaultProps = {
  className: "",
};

export default memo(Divider);
