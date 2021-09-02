import React from "react";
import { createPortal } from "react-dom";
import cx from "classnames";
import map from "lodash/map";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

export default function Options({
  position,
  value: currentValue,
  single,
  show,
  mini,
  options,
  filterItem,
  handleItemClick,
  focusItem,
  setFocusItem,
  getContainer,
  inline
}) {
  const noFilterResult = filterItem !== "" && isEmpty(options);
  const cls = cx("select-option-wrap", {
    show,
    mini: mini,
    inline: inline
  });
  const container = (getContainer && getContainer()) || document.body;
  const content = noFilterResult ? (
    <div className="select-no-result">No results found</div>
  ) : (
    <ul className="select-option-content">
      {map(options, (option = {}) => {
        const { label, value, disabled } = option;
        const active = single ? isEqual(option, currentValue) : false;
        const focus = isEqual(option, focusItem);
        const cls = cx("select-option-item", {
          active,
          focus,
          disabled
        });
        return (
          <li
            key={"select" + label + value}
            className={cls}
            title={label}
            onClick={e => {
              if (!disabled) {
                handleItemClick(option);
              } else {
                e.stopPropagation();
              }
            }}
            onMouseEnter={() => setFocusItem(option)}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
  if (inline) {
    return <div className={cls}>{content}</div>;
  }
  return createPortal(
    <div className={cls} style={position}>
      {content}
    </div>,
    container
  );
}
