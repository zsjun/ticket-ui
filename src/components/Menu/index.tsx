import React, { FC, memo } from "react";
import classNames from "classnames";

export type MenuType = "danger" | "link";
interface BaseMenuProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultMenuProps =BaseMenuProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Menu } from 'stonewise-ui'
 * ~~~
 */
export const Menu: FC<BaseMenuProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("menu-wrap", className, {
    [`menu`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Menu.defaultProps = {
  className: "",
};

export default memo(Menu);
