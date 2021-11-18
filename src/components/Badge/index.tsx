import React, { FC, memo } from "react";
import classNames from "classnames";

export type BadgeType = "danger" | "link";
interface BaseBadgeProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultBadgeProps =BaseBadgeProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Badge } from 'stonewise-ui'
 * ~~~
 */
export const Badge: FC<BaseBadgeProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("badge-wrap", className, {
    [`badge`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Badge.defaultProps = {
  className: "",
};

export default memo(Badge);
