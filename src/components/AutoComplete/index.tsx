import React, { FC, memo } from "react";
import classNames from "classnames";

export type AutoCompleteType = "danger" | "link";
interface BaseAutoCompleteProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultAutoCompleteProps =BaseAutoCompleteProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { AutoComplete } from 'stonewise-ui'
 * ~~~
 */
export const AutoComplete: FC<BaseAutoCompleteProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("autoComplete-wrap", className, {
    [`autoComplete`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

AutoComplete.defaultProps = {
  className: "",
};

export default memo(AutoComplete);
