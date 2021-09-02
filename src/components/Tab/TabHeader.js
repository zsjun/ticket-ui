import React from "react";
import get from "lodash/get";
import classNames from "classnames";

export default function TabHeader(props) {
  const { activeKey, childPanels, onTitleClick } = props;
  return (
    <div className="tab-header">
      {React.Children.map(childPanels, child => {
        if (!child) return null;
        const childProps = get(child, "props") || {};
        const { keys, header, disabled } = childProps;
        const active = keys === activeKey;
        const classes = classNames("tab-header-item", {
          active,
          disabled
        });
        return (
          <div
            className={classes}
            onClick={() => onTitleClick(keys, disabled)}
            key={keys}
          >
            <div className="tab-header-inner">{header}</div>
          </div>
        );
      })}
    </div>
  );
}
