import React, { FC, memo } from "react";
import classNames from "classnames";

export type ConfigProviderType = "danger" | "link";
interface BaseConfigProviderProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultConfigProviderProps =BaseConfigProviderProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { ConfigProvider } from 'stonewise-ui'
 * ~~~
 */
export const ConfigProvider: FC<BaseConfigProviderProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("configProvider-wrap", className, {
    [`configProvider`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

ConfigProvider.defaultProps = {
  className: "",
};

export default memo(ConfigProvider);
