import React, { FC, memo } from "react";
import classNames from "classnames";

export type CollapseType = "danger" | "link";
interface BaseCollapseProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultCollapseProps =BaseCollapseProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Collapse } from 'stonewise-ui'
 * ~~~
 */
export const Collapse: FC<BaseCollapseProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("collapse-wrap", className, {
    [`collapse`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Collapse.defaultProps = {
  className: "",
};

export default memo(Collapse);
