import React, { FC } from "react";
// import classNames from "classnames";

interface BaseIconProps {
  className?: string;
  children?: React.ReactNode;
}
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'stonewise-ui'
 * ~~~
 */
export const Icon: FC<BaseIconProps> = (props) => {
  return <div>icon</div>;
};

Icon.defaultProps = {
  className: "",
};

export default Icon;
