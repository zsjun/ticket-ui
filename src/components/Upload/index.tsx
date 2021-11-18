import React, { FC, memo } from "react";
import classNames from "classnames";

export type UploadType = "danger" | "link";
interface BaseUploadProps {
  className?: string;
  children?: React.ReactNode;
}
export type defaultUploadProps =BaseUploadProps;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { Upload } from 'stonewise-ui'
 * ~~~
 */
export const Upload: FC<BaseUploadProps> = (props) => {
  const {className, children, ...restProps } =
    props;
  const classes = classNames("upload-wrap", className, {
    [`upload`]:false,
  });
  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};

Upload.defaultProps = {
  className: "",
};

export default memo(Upload);
