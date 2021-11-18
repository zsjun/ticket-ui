import React, { FC, memo } from "react";
import classNames from "classnames";

export type SwitchType = "danger" | "link";
interface BaseSwitchProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultSwitchProps =BaseSwitchProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Switch } from 'stonewise-ui'
 * ~~~
 */
export const Switch: FC<BaseSwitchProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("switch-wrap", className, {
    [`switch`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Switch.defaultProps = {
  className: "",
};

export default memo(Switch);
