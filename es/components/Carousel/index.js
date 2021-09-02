function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { Children, cloneElement, useState, useRef } from "react";
import PropTypes from "prop-types";
import cx from "classnames"; // import debounce from "lodash/debounce";

import { nfn } from "../../common";
import { useClientRect } from "../../common/hooks";

function Carousel({
  children,
  padding,
  className,
  onChange,
  afterChange
}) {
  const _useClientRect = useClientRect(),
        _useClientRect2 = _slicedToArray(_useClientRect, 2),
        rect = _useClientRect2[0],
        ref = _useClientRect2[1];

  const _useState = useState(0),
        _useState2 = _slicedToArray(_useState, 2),
        index = _useState2[0],
        setIndex = _useState2[1];

  const handleIndexChange = (i, count) => {
    if (i < 0 || i >= count) return;
    setIndex(i);
    onChange(i, count);
    setTimeout(() => {
      afterChange(i, count);
    }, 1000);
  };

  const _rect$width = rect.width,
        width = _rect$width === void 0 ? 0 : _rect$width;
  const cls = cx("carousel", className);
  const count = Children.count(children);
  const left = (width + padding) * index;
  const prevCls = cx("carousel-prev", {
    disabled: index <= 0
  });
  const nextCls = cx("carousel-next", {
    disabled: index >= count - 1
  });
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: cls
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: prevCls,
      onClick: () => handleIndexChange(index - 1, count)
    },
    /*#__PURE__*/
    React.createElement("i", {
      className: "icon-arrow"
    })),
    /*#__PURE__*/
    React.createElement("div", {
      className: "carousel-inner-wrap"
    },
    /*#__PURE__*/
    React.createElement("div", {
      ref: ref
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "carousel-inner",
      style: {
        width: count * (width + padding),
        transform: "translateX(-".concat(left, "px)")
      }
    }, Children.map(children, child =>
    /*#__PURE__*/
    cloneElement(child, {
      style: _objectSpread2(_objectSpread2({}, child.props.style), {}, {
        marginRight: padding,
        width
      })
    }))))),
    /*#__PURE__*/
    React.createElement("div", {
      className: nextCls,
      onClick: () => handleIndexChange(index + 1, count)
    },
    /*#__PURE__*/
    React.createElement("i", {
      className: "icon-arrow"
    })))
  );
}

Carousel.propTypes = {
  /** 子内容之间的间距 */
  padding: PropTypes.number,

  /** 切换的回调 */
  onChange: PropTypes.func,

  /** 切换动画结束后的回调 */
  afterChange: PropTypes.func
};
Carousel.defaultProps = {
  padding: 10,
  onChange: nfn,
  afterChange: nfn
};
export default Carousel;