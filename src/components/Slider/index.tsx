import React, { FC, memo } from "react";
import classNames from "classnames";

export type SliderType = "danger" | "link";
interface BaseSliderProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultSliderProps =BaseSliderProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Slider } from 'stonewise-ui'
 * ~~~
 */
export const Slider: FC<BaseSliderProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("slider-wrap", className, {
    [`slider`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Slider.defaultProps = {
  className: "",
};

export default memo(Slider);
