import React, { FC, memo } from "react";
import classNames from "classnames";

export type TagType = "danger" | "link";
interface BaseTagProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultTagProps =BaseTagProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Tag } from 'stonewise-ui'
 * ~~~
 */
export const Tag: FC<BaseTagProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("tag-wrap", className, {
    [`tag`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Tag.defaultProps = {
  className: "",
};

export default memo(Tag);
