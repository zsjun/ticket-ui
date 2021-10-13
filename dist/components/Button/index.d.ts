import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
export declare type ButtonSize = "lg" | "sm";
export declare enum ButtonSize1 {
    "lg" = "lg",
    "sm" = "sm",
    "link" = "link"
}
export declare type ButtonType = "primary" | "default" | "danger" | "link";
interface BaseButtonProps {
    className?: string;
    /** 设置Button的禁用 */
    disabled?: boolean;
    /** 设置Button的尺寸 */
    size?: ButtonSize;
    /** 设置Button的类型 */
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Button } from 'stonewise-ui'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export default Button;
