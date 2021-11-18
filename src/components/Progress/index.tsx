import React, { FC, memo } from "react";
import classNames from "classnames";

export type ProgressType = "danger" | "link";
interface BaseProgressProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultProgressProps =BaseProgressProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Progress } from 'stonewise-ui'
 * ~~~
 */
export const Progress: FC<BaseProgressProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("progress-wrap", className, {
    [`progress`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Progress.defaultProps = {
  className: "",
};

export default memo(Progress);
