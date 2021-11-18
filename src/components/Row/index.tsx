import React, { FC, memo } from "react";
import classNames from "classnames";

export type RowType = "danger" | "link";
interface BaseRowProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultRowProps =BaseRowProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Row } from 'stonewise-ui'
 * ~~~
 */
export const Row: FC<BaseRowProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("row-wrap", className, {
    [`row`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Row.defaultProps = {
  className: "",
};

export default memo(Row);
