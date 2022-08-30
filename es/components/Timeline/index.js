import React, { Children, cloneElement } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Item from "./Item";
Timeline.Item = Item;
export { Item };
export default function Timeline({
  children,
  hasDesc,
  className,
  style,
  role
}) {
  const classes = classNames({
    timeline: true,
    "has-desc": hasDesc
  }, className);
  const items = Children.map(children, (ele, idx) =>
  /*#__PURE__*/
  cloneElement(ele, {
    last: idx === Children.count(children) - 1
  }));
  return (
    /*#__PURE__*/
    React.createElement("ul", {
      role: role,
      className: classes,
      style: style
    }, items)
  );
}
Timeline.propTypes = {
  /** 是否包含描述 */
  hasDesc: PropTypes.bool
};
Timeline.defaultProps = {
  hasDesc: false
};