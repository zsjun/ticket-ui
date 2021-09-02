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
  multi,
  options,
  filterItem,
  handleItemClick,
  focusItem,
  setFocusItem,
  getContainer
}) {
  const noFilterResult = filterItem !== "" && isEmpty(options);
  const cls = cx("select-option-wrap", {
    show
  });
  const container = getContainer && getContainer() || document.body;
  return (
    /*#__PURE__*/
    createPortal(
    /*#__PURE__*/
    React.createElement("div", {
      className: cls,
      style: position
    }, noFilterResult ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "select-no-result"
    }, "No results found") :
    /*#__PURE__*/
    React.createElement("ul", {
      className: "select-option-content"
    }, map(options, (option = {}) => {
      const label = option.label,
            value = option.value,
            disabled = option.disabled;
      const active = single ? isEqual(option, currentValue) : false;
      const focus = isEqual(option, focusItem);
      const cls = cx("select-option-item", {
        active,
        focus,
        disabled
      });
      return (
        /*#__PURE__*/
        React.createElement("li", {
          key: "select" + label + value,
          className: cls,
          onClick: e => {
            if (!disabled) {
              if (multi) {
                e.stopPropagation();
                handleItemClick(option, false, false);
              } else {
                handleItemClick(option);
              }
            } else {
              e.stopPropagation();
            }
          },
          onMouseEnter: () => setFocusItem(option)
        }, label)
      );
    }))), container)
  );
}