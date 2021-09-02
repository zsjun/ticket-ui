function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import TabHeader from "./TabHeader";
import get from "lodash/get";
import { nfn } from "../../common";
/**
 * 选项卡组件
 */

function Tab(props) {
  const defaultActiveKey = props.defaultActiveKey,
        beforeChange = props.beforeChange,
        onChange = props.onChange,
        _props$children = props.children,
        children = _props$children === void 0 ? [] : _props$children,
        className = props.className,
        style = props.style,
        theme = props.theme,
        tabStyle = props.tabStyle,
        activeStyle = props.activeStyle,
        tabClassName = props.tabClassName,
        activeClassName = props.activeClassName,
        isTrapezoid = props.isTrapezoid;

  if (tabStyle || activeStyle || tabClassName || activeClassName) {
    console.warn("\n      \u901A\u8FC7tabStyle, activeStyle, tabClassName, activeClassName\n      \u8BBE\u7F6Etab\u6837\u5F0F\u7684\u65B9\u6CD5\u5DF2\u7ECF\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528css-module\u7684\u7279\u6027\u6765\u8FDB\u884C\u5904\u7406\n      ");
  }

  if (isTrapezoid) {
    console.warn("\n      \u901A\u8FC7isTrapzoid\u8BBE\u7F6Etab\u6837\u5F0F\u7684\u65B9\u6CD5\u5DF2\u7ECF\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528\u4E3B\u9898\u6765\u8FDB\u884C\u66F4\u6539\n      ");
  }

  const _useState = useState(defaultActiveKey),
        _useState2 = _slicedToArray(_useState, 2),
        active = _useState2[0],
        setActive = _useState2[1];

  useEffect(() => {
    // 改为受苦的组件
    // 若defaultActiveKey改变，则修改active
    // 若没有传，则设置第一个key为active
    if (defaultActiveKey) {
      setActive(defaultActiveKey);
    } else {
      const firstChild = get(children, 0);
      const key = get(firstChild, "props.keys");

      if (key) {
        setActive(key);
      }
    }
  }, [defaultActiveKey, children]);
  const cls = classNames("tab-wrap", className, "tab-".concat(theme));

  const handleTabChange = (key, disabled) => {
    if (disabled) return;
    const shouldChange = beforeChange(); // 若返回false, 则不进行离开

    if (!shouldChange) {
      return;
    }

    setActive(key);
    onChange(key);
  };

  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: cls,
      style: style
    },
    /*#__PURE__*/
    React.createElement(TabHeader, {
      activeKey: active,
      childPanels: children,
      onTitleClick: handleTabChange
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "tab-content"
    }, Children.map(children, (child, index) => {
      const isActive = get(child, "props.keys") === active;
      if (!child) return null;
      return (
        /*#__PURE__*/
        cloneElement(child, {
          active: isActive
        })
      );
    }).filter(item => item)))
  );
}

export default Tab;
Tab.defaultProps = {
  beforeChange: () => true,
  onChange: nfn,
  theme: "title"
};
Tab.propTypes = {
  /** 默认active的tab, 默认第一个展示 */
  defaultActiveKey: PropTypes.string,

  /** 切换tab时的回调 */
  onChange: PropTypes.func,

  /** 切换tab前的回调，若返回false，则不进行切换 */
  beforeChange: PropTypes.func,

  /** 默认主题 */
  theme: PropTypes.oneOf(["title", "card"])
};