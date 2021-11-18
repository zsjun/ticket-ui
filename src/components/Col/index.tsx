import React, { FC, memo } from "react";
import classNames from "classnames";

export type ColType = "danger" | "link";
interface BaseColProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultColProps =BaseColProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Col } from 'stonewise-ui'
 * ~~~
 */
export const Col: FC<BaseColProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("col-wrap", className, {
    [`col`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Col.defaultProps = {
  className: "",
};

export default memo(Col);
