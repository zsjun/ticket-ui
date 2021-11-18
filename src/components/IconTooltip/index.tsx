import React, { FC, memo } from "react";
import classNames from "classnames";

export type IconTooltipType = "danger" | "link";
interface BaseIconTooltipProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultIconTooltipProps =BaseIconTooltipProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { IconTooltip } from 'stonewise-ui'
 * ~~~
 */
export const IconTooltip: FC<BaseIconTooltipProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("iconTooltip-wrap", className, {
    [`iconTooltip`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

IconTooltip.defaultProps = {
  className: "",
};

export default memo(IconTooltip);
