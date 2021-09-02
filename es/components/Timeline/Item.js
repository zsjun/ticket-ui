import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
export default function TimelineItem({
  last,
  dot,
  desc,
  children,
  className,
  end
}) {
  const classes = classNames({
    "timeline-item": true,
    last
  }, className);
  return (
    /*#__PURE__*/
    React.createElement("li", {
      className: classes
    }, !end ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "timeline-item-tail"
    }) : null, end ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "timeline-item-end"
    }) :
    /*#__PURE__*/
    React.createElement("div", {
      className: "timeline-item-dot"
    }, dot), desc ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "timeline-item-dot-desc"
    }, desc) : null, !end ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "timeline-item-content"
    }, children) : null)
  );
}
TimelineItem.propTypes = {
  /** 点的内容 */
  dot: PropTypes.any,

  /** 左侧点的描述 */
  desc: PropTypes.any,

  /** 是否是末尾节点 */
  end: PropTypes.bool
};