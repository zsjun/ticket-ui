import React, { FC } from "react";
interface BaseBoxProps {
    className?: string;
    style?: Object;
    data?: any;
    /** 设置Box是否在加载 */
    isLoading?: boolean;
    children?: React.ReactNode;
    href?: string;
}
/**
 * 页面中常用的组件容器
 * ### 引用方法
 *
 * ~~~js
 * import { Box } from 'stonewise-ui'
 * ~~~
 */
export declare const Box: FC<BaseBoxProps>;
declare const _default: React.NamedExoticComponent<BaseBoxProps>;
export default _default;
