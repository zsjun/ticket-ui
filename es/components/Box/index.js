function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Fragment, useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import iconArrow from "./images/coor-arrow.svg";
import Icon from "../Icon";
import Loading from "../Loading";
import NoResult from "../NoResult";
import Item from "../Item";
import isEmpty from "lodash/isEmpty";
import isBoolean from "lodash/isBoolean";
import isObject from "lodash/isObject";
import { nfn } from "../../common";

function getContent({
  show,
  loading,
  error,
  children,
  emptyDesc
}) {
  if (error) {
    return (
      /*#__PURE__*/
      React.createElement(NoResult, {
        desc: error
      })
    );
  }

  if (loading) {
    return (
      /*#__PURE__*/
      React.createElement(Loading, {
        className: "box-loading",
        size: "lg"
      })
    );
  }

  if (show) {
    return children;
  }

  return (
    /*#__PURE__*/
    React.createElement(NoResult, {
      desc: emptyDesc
    })
  );
}

function Title({
  title,
  collapse,
  toggleRender,
  open,
  setOpen
}) {
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "box-title",
      "test-role": "time-content"
    }, title,
    /*#__PURE__*/
    React.createElement(Item, {
      show: collapse
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "box-title-toggle",
      onClick: () => setOpen(!open)
    }, toggleRender ? toggleRender(open) :
    /*#__PURE__*/
    React.createElement(Fragment, null,
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "box-title-toggle-icon",
      link: iconArrow
    }), open ? "收起" : "展开"))))
  );
}
/**
 * 基本的盒子，用于组成页面的各个小容器
 * 可设置标题，自带Loading样式，自身可判断是否有数据而进行展示/隐藏
 */


function Box({
  title,
  data,
  className,
  border,
  collapse,
  defaultOpen,
  error,
  isLoading,
  children,
  emptyDesc,
  contentHeight,
  style,
  onToggle,
  toggleRender
}) {
  const _useState = useState(defaultOpen),
        _useState2 = _slicedToArray(_useState, 2),
        open = _useState2[0],
        setOpen = _useState2[1];

  useEffect(() => {
    if (defaultOpen !== open) {
      setOpen(defaultOpen);
    }
  }, [defaultOpen]);
  const classes = classNames("box", className, {
    border,
    collapse,
    open
  });

  const isBoxShow = data => {
    // 正在加载时，展示Box
    if (Array.isArray(data)) {
      return data.length;
    } else if (isObject(data)) {
      return !isEmpty(data);
    } else {
      return data && data !== 0;
    }
  };

  const show = isBoxShow(data);
  const onToggleClick = useCallback(() => {
    setOpen(!open);
    onToggle(!open);
  }, [open, onToggle]);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement(Item, {
      show: title
    },
    /*#__PURE__*/
    React.createElement(Title, {
      title: title,
      collapse: collapse,
      toggleRender: toggleRender,
      open: open,
      setOpentitle: title,
      setOpen: onToggleClick
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: "box-content",
      style: {
        height: contentHeight
      }
    }, getContent({
      show,
      loading: isLoading,
      error,
      children,
      emptyDesc
    })))
  );
}

Box.defaultProps = {
  isLoading: false,
  defaultOpen: true,
  onToggle: nfn
};
Box.propTypes = {
  /** 盒子的标题，可以省略 */
  title: PropTypes.any,

  /** 盒子依赖的数据，会根据是否有该数据而判断是否展示数据为空, 当data为boolean的时候，直接判断是否展示盒子依赖的数据 */
  data: PropTypes.any,

  /** 数据为空时展示的描述 */
  emptyDesc: PropTypes.string,

  /** 是否正在Loading, 是的话会自带Loading样式 */
  isLoading: PropTypes.bool,

  /** 是否带border */
  border: PropTypes.bool,

  /** 是否可以折叠 */
  collapse: PropTypes.bool,

  /** 可以折叠时，是否默认展开 */
  defaultOpen: PropTypes.bool,

  /** 自定义折叠按钮 */
  toggleRender: PropTypes.func,

  /** 自定义盒子内容高度 */
  contentHeight: PropTypes.string
};
export default Box;