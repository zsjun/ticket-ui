import React, { FC, memo } from "react";
import classNames from "classnames";

export type DropdownType = "danger" | "link";
interface BaseDropdownProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultDropdownProps =BaseDropdownProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Dropdown } from 'stonewise-ui'
 * ~~~
 */
export const Dropdown: FC<BaseDropdownProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("dropdown-wrap", className, {
    [`dropdown`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Dropdown.defaultProps = {
  className: "",
};

export default memo(Dropdown);
