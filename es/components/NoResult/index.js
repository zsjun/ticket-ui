import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
export default function NoResult(props) {
  const desc = props.desc,
        className = props.className,
        styleCss = props.style;
  const classes = classNames("no-result", className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      role: "no-result",
      className: classes,
      style: styleCss
    }, desc)
  );
}
NoResult.propTypes = {
  /** 无数据时的描述 */
  desc: PropTypes.string
};
NoResult.defaultProps = {
  desc: "暂无数据"
};