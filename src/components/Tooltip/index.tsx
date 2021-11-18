import React, { FC, memo } from "react";
import classNames from "classnames";

export type TooltipType = "danger" | "link";
interface BaseTooltipProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultTooltipProps =BaseTooltipProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Tooltip } from 'stonewise-ui'
 * ~~~
 */
export const Tooltip: FC<BaseTooltipProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("tooltip-wrap", className, {
    [`tooltip`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Tooltip.defaultProps = {
  className: "",
};

export default memo(Tooltip);
