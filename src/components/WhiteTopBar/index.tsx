import React, { FC, memo } from "react";
import classNames from "classnames";
import { LeftOutlined } from "@ant-design/icons";
export interface historyProps {
  goBack: () => void;
}
export interface BaseWhiteTopBarProps {
  className?: string;
  /** 设置WhiteTopBar的返回是否使用默认的history返回,true为不使用 */
  isBack: boolean;
  /** 设置WhiteTopBar的尺寸 */
  history: historyProps;
  /** 自定义WhiteTopBar的返回函数 */
  onBackClick?: () => void;
  /** 设置WhiteTopBar的的标题 */
  title?: string;
  children?: React.ReactNode;
}

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 *
 * ~~~js
 * import { WhiteTopBar } from 'stonewise-ui'
 * ~~~
 */
export const WhiteTopBar: FC<BaseWhiteTopBarProps> = (props) => {
  const {
    isBack = false,
    onBackClick = () => {},
    title,
    children,
    history,
    className,
    ...restProps
  } = props;
  // btn、btn-lg、btn-primary
  const classes = classNames("whiteTopBar-wrap", className);
  return (
    <div className={classes} {...restProps}>
      <div className="lft">
        <LeftOutlined
          onClick={() => {
            if (!isBack) {
              history?.goBack && history.goBack();
            } else {
              onBackClick && onBackClick();
            }
          }}
        />
        <span className="title">{title}</span>
      </div>
      <div className="rt">{children}</div>
    </div>
  );
};

WhiteTopBar.defaultProps = {
  isBack: false,
};

export default memo(WhiteTopBar);
