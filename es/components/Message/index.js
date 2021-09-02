function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

import React, { createRef } from "react";
import ReactDOM from "react-dom";
import Animate from "rc-animate";
import filter from "lodash/filter";
import Notice from "./Notice";
let seed = 0;

let AlertGroup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AlertGroup, _React$Component);

  var _super = _createSuper2(AlertGroup);

  function AlertGroup(...args) {
    var _this;

    _classCallCheck(this, AlertGroup);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "state", {
      alerts: []
    });

    _defineProperty(_assertThisInitialized(_this), "onEnd", key => {
      const alerts = _this.state.alerts;

      _this.setState({
        alerts: filter(alerts, alert => alert.key !== key)
      });
    });

    _defineProperty(_assertThisInitialized(_this), "addAlert", a => {
      _this.setState({
        alerts: _this.state.alerts.concat(a)
      });
    });

    return _this;
  }

  _createClass(AlertGroup, [{
    key: "render",
    value: function render() {
      const alerts = this.state.alerts;
      const children = alerts.map(a => {
        if (!a.key) {
          seed++;
          a.key = String(seed);
        }

        return (
          /*#__PURE__*/
          React.createElement(Notice, _extends({}, a, {
            onEnd: () => this.onEnd(a.key)
          }))
        );
      });
      return (
        /*#__PURE__*/
        React.createElement(Animate, {
          transitionAppear: true,
          transitionName: "move-up",
          component: "div"
        }, children)
      );
    }
  }]);

  return AlertGroup;
}(React.Component);

const alertGroup = new Map();

function alert(content, time, type, target = document.body) {
  let group = alertGroup.get(target);

  const add = group => group.addAlert({
    content,
    time,
    type
  });

  if (!group) {
    const div = document.createElement("div");
    div.setAttribute("class", "notice-group"); // body容器下 默认为fix

    if (target === document.body) {
      div.style.position = "fixed";
    }

    target.appendChild(div);
    const ref =
    /*#__PURE__*/
    createRef();
    ReactDOM.render(
    /*#__PURE__*/
    React.createElement(AlertGroup, {
      ref: ref
    }), div, () => {
      group = ref.current;
      alertGroup.set(target, group);
      add(group);
    });
  } else {
    add(group);
  }
}

export default {
  success: (info, time = 3000, target) => alert(info, time, "success", target),
  error: (info, time = 9000, target) => alert(info, time, "error", target),
  warning: (info, time = 3000, target) => alert(info, time, "warning", target)
};