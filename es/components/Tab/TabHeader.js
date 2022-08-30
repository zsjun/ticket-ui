import React from "react";
import map from "lodash/map";
import get from "lodash/get";
import classNames from "classnames";
export default function TabHeader(props) {
  const activeKey = props.activeKey,
        childPanels = props.childPanels,
        onTitleClick = props.onTitleClick;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "tab-header"
    }, map(childPanels, child => {
      if (!child) return null;
      const childProps = get(child, "props") || {};
      const keys = childProps.keys,
            header = childProps.header,
            disabled = childProps.disabled;
      const active = keys === activeKey;
      const classes = classNames("tab-header-item", {
        active,
        disabled
      });
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes,
          onClick: () => onTitleClick(keys, disabled),
          key: keys
        }, header)
      );
    }))
  );
}