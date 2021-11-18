import React, { FC, memo } from "react";
import classNames from "classnames";

export type PopoverType = "danger" | "link";
interface BasePopoverProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultPopoverProps =BasePopoverProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Popover } from 'stonewise-ui'
 * ~~~
 */
export const Popover: FC<BasePopoverProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("popover-wrap", className, {
    [`popover`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Popover.defaultProps = {
  className: "",
};

export default memo(Popover);
