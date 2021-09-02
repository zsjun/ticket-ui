function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import TextTruncate from "react-text-truncate";
import classNames from "classnames";
/**
 * 文字截断
 */

export default function Truncate(props) {
  const children = props.children,
        line = props.line,
        defaultExpand = props.defaultExpand,
        canReadMore = props.canReadMore,
        less = props.less,
        more = props.more,
        others = _objectWithoutProperties(props, ["children", "line", "defaultExpand", "canReadMore", "less", "more"]);

  const _useState = useState(defaultExpand),
        _useState2 = _slicedToArray(_useState, 2),
        expand = _useState2[0],
        setExpand = _useState2[1];

  const moreDom =
  /*#__PURE__*/
  React.createElement("a", {
    className: "truncate-expand",
    onClick: () => setExpand(!expand)
  }, expand ? less : more);
  const cls = classNames({
    "break-all": line > 1
  }, "truncate");
  return expand ?
  /*#__PURE__*/
  React.createElement(Fragment, null, children, " ", moreDom) :
  /*#__PURE__*/
  React.createElement(TextTruncate, _extends({}, others, {
    text: children,
    line: line,
    containerClassName: cls,
    textTruncateChild: canReadMore ? moreDom : ""
  }));
}
Truncate.propTypes = {
  /** 是否默认展开 */
  defaultExpand: PropTypes.bool,

  /** 超过多少行开始截断 */
  line: PropTypes.number,

  /** 展开的提示 */
  more: PropTypes.node,

  /** 收起的提示 */
  less: PropTypes.node,

  /** 是否可以展开收起 */
  canReadMore: PropTypes.bool
};
Truncate.defaultProps = {
  line: 1,
  more: "展开",
  less: "收起",
  canReadMore: true
};