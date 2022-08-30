function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from "react";
import PropTypes from "prop-types";
import Circle from "./Loading";
import Bar from "./LoadingBar";
import Box from "./LoadingBox";
/**
 * 各种Loading样式
 */

export default function Loading(props) {
  const type = props.type,
        others = _objectWithoutProperties(props, ["type"]);

  switch (type) {
    case "bar":
      return (
        /*#__PURE__*/
        React.createElement(Bar, others)
      );

    case "box":
      return (
        /*#__PURE__*/
        React.createElement(Box, others)
      );

    default:
      return (
        /*#__PURE__*/
        React.createElement(Circle, others)
      );
  }
}
Loading.defaultProps = {
  type: "default"
};
Loading.propTypes = {
  /** loaing的不同样式 */
  type: PropTypes.oneOf(["bar", "box", "default"]),

  /** type='default' 的size大小  lg: 80,80  sm: 20,20  默认是sm */
  size: PropTypes.oneOf(["lg", "sm"])
};