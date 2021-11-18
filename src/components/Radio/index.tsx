import React, { FC, memo } from "react";
import classNames from "classnames";

export type RadioType = "danger" | "link";
interface BaseRadioProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultRadioProps =BaseRadioProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Radio } from 'stonewise-ui'
 * ~~~
 */
export const Radio: FC<BaseRadioProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("radio-wrap", className, {
    [`radio`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Radio.defaultProps = {
  className: "",
};

export default memo(Radio);
