import React, { FC, memo } from "react";
import classNames from "classnames";

export type TransferType = "danger" | "link";
interface BaseTransferProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultTransferProps =BaseTransferProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Transfer } from 'stonewise-ui'
 * ~~~
 */
export const Transfer: FC<BaseTransferProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("transfer-wrap", className, {
    [`transfer`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Transfer.defaultProps = {
  className: "",
};

export default memo(Transfer);
