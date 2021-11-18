import React, { FC, memo } from "react";
import classNames from "classnames";

export type ModalType = "danger" | "link";
interface BaseModalProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultModalProps =BaseModalProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Modal } from 'stonewise-ui'
 * ~~~
 */
export const Modal: FC<BaseModalProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("modal-wrap", className, {
    [`modal`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Modal.defaultProps = {
  className: "",
};

export default memo(Modal);
