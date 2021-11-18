import React, { FC, memo } from "react";
import classNames from "classnames";

export type EmptyType = "danger" | "link";
interface BaseEmptyProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultEmptyProps =BaseEmptyProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Empty } from 'stonewise-ui'
 * ~~~
 */
export const Empty: FC<BaseEmptyProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("empty-wrap", className, {
    [`empty`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Empty.defaultProps = {
  className: "",
};

export default memo(Empty);
