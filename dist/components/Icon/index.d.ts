import React, { FC } from "react";
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
export declare const Icon: FC<BaseIconProps>;
export default Icon;
