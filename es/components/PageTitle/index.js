function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper2(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
 * @Author: zsj
 * @Date: 2018-02-12 15:58:08
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-04-10 14:22:09
 */
import React, { Component } from "react";
import { any } from "prop-types";
import classNames from "classnames";
/**
 * 页面头部标题
 */

let PageTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(PageTitle, _Component);

  var _super = _createSuper2(PageTitle);

  function PageTitle() {
    _classCallCheck(this, PageTitle);

    return _super.apply(this, arguments);
  }

  _createClass(PageTitle, [{
    key: "render",
    value: function render() {
      const _this$props = this.props,
            name = _this$props.name,
            children = _this$props.children,
            className = _this$props.className,
            style = _this$props.style;
      const classes = classNames("row page-max-title", className); // const _key = `${Math.random().toFixed(6)}hjsd`

      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes,
          style: style
        }, children, name)
      );
    }
  }]);

  return PageTitle;
}(Component);

PageTitle.displayName = "PageTitle";
PageTitle.propTypes = {
  /** 唯一需要传入的属性 */
  name: any.isRequired
};
PageTitle.defaultProps = {
  name: ""
};
export default PageTitle;