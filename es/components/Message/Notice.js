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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from "react";
import Icon from "../Icon";
import cx from "classnames";
import alertIcon from "./images/alert.svg";
import errorIcon from "./images/fail.svg";
import successIcon from "./images/success.svg";
const typeMap = {
  success: successIcon,
  error: errorIcon,
  warning: alertIcon
};

let Notice =
/*#__PURE__*/
function (_Component) {
  _inherits(Notice, _Component);

  var _super = _createSuper2(Notice);

  function Notice(...args) {
    var _this;

    _classCallCheck(this, Notice);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", () => {
      const _this$props = _this.props,
            onEnd = _this$props.onEnd,
            _this$props$time = _this$props.time,
            time = _this$props$time === void 0 ? 3000 : _this$props$time;
      setTimeout(onEnd, time);
    });

    return _this;
  }

  _createClass(Notice, [{
    key: "render",
    value: function render() {
      const _this$props2 = this.props,
            _this$props2$type = _this$props2.type,
            type = _this$props2$type === void 0 ? "warning" : _this$props2$type,
            content = _this$props2.content;
      const icon = typeMap[type];
      const cls = cx("notice", type);
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: cls
        },
        /*#__PURE__*/
        React.createElement(Icon, {
          link: icon,
          className: "notice-icon"
        }), content)
      );
    }
  }]);

  return Notice;
}(Component);

export { Notice as default };