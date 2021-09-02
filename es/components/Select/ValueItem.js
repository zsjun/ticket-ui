import React from "react";
import cx from "classnames";
import delIconCavity from "./images/del_icon_cavity.svg";
import Icon from "../Icon";
export default function ValueItem({
  value = {},
  onRemove,
  disabled
}) {
  const classes = cx("multi-select-value", {
    disabled: disabled || value.disabled
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes
    },
    /*#__PURE__*/
    React.createElement("span", null, value.label || value.value),
    /*#__PURE__*/
    React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        onRemove(value);
      },
      style: {
        cursor: "pointer"
      }
    },
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "multi-item-del-icon",
      link: delIconCavity
    })))
  );
}