import React, { FC, memo } from "react";
import classNames from "classnames";
import { Spin } from "antd";
import { isObject, isEmpty } from "lodash";
import noDataPng from "./box-no-data.png";
const isBoxShow = (data: any) => {
  // 正在加载时，展示Box
  if (Array.isArray(data)) {
    return data.length;
  }
  if (isObject(data)) {
    return !isEmpty(data);
  }
  return data && data !== 0;
};

interface BaseBoxProps {
  className?: string;
  style?: Object;
  data?: any;
  /** 设置Box是否在加载 */
  isLoading?: boolean;
  children?: React.ReactNode;
  href?: string;
}
/**
 * 页面中常用的组件容器
 * ### 引用方法
 *
 * ~~~js
 * import { Box } from 'stonewise-ui'
 * ~~~
 */
export const Box: FC<BaseBoxProps> = (props) => {
  const {
    isLoading,
    children,
    className,
    data,
    style = {},
    ...restProps
  } = props;
  const classes = classNames("box-wrap", className);
  // const show = false;
  const show = isBoxShow(data);
  return (
    <div {...restProps} className={classes} style={style}>
      {isLoading && (
        <div className="box-loading">
          <Spin />
        </div>
      )}
      {!isLoading && !show && (
        <div className="box-no-data">
          <div>
            <img alt="暂无图像" src={noDataPng} />
            <div className="center">暂无数据</div>
          </div>
        </div>
      )}
      {!isLoading && show ? children : null}
    </div>
  );
};

Box.defaultProps = {
  isLoading: false,
};

export default memo(Box);
