import React, { FC, memo } from "react";
import classNames from "classnames";

export type SpaceType = "danger" | "link";
interface BaseSpaceProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultSpaceProps =BaseSpaceProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Space } from 'stonewise-ui'
 * ~~~
 */
export const Space: FC<BaseSpaceProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("space-wrap", className, {
    [`space`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Space.defaultProps = {
  className: "",
};

export default memo(Space);
