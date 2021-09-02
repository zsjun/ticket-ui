function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import isEmpty from "lodash/isEmpty";
export default ((_ref) => {
  let show = _ref.show,
      children = _ref.children,
      _ref$default = _ref.default,
      defaultContent = _ref$default === void 0 ? null : _ref$default,
      others = _objectWithoutProperties(_ref, ["show", "children", "default"]);

  if (isEmpty(others)) {
    return show ? children : defaultContent;
  }

  return show ?
  /*#__PURE__*/
  React.cloneElement(children, others) : defaultContent;
});