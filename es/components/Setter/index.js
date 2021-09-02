function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import { observable, observe, unobserve, Dep } from "./helper";
import clone from "lodash/cloneDeep";
import debounce from "lodash/debounce";
/**
 * Setter组件，会监听传入data的改变，并在每次改变后返回新的值，
 * 可用于处理深层次，复杂的表单
 */

let Setter =
/*#__PURE__*/
function (_Component) {
  _inherits(Setter, _Component);

  var _super = _createSuper2(Setter);

  function Setter(...args) {
    var _this;

    _classCallCheck(this, Setter);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "dep", new Dep());

    _defineProperty(_assertThisInitialized(_this), "state", {
      draft: false,
      result: {}
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", () => {
      _this.initData();
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", () => {
      _this.clearData();
    });

    _defineProperty(_assertThisInitialized(_this), "handleDataChange", () => {
      const draft = _this.state.draft;

      _this.setState({
        result: clone(draft)
      });
    });

    return _this;
  }

  _createClass(Setter, [{
    key: "initData",
    value: function initData() {
      const data = this.props.data;
      const draft = observable(data, this.dep);
      this.loger = debounce(this.handleDataChange, 200);
      observe(this.loger, this.dep);
      this.setState({
        draft,
        result: data
      });
    }
  }, {
    key: "clearData",
    value: function clearData() {
      unobserve(this.loger, this.dep);
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.state.result;
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props = this.props,
            data = _this$props.data,
            children = _this$props.children,
            others = _objectWithoutProperties(_this$props, ["data", "children"]);

      const _this$state = this.state,
            draft = _this$state.draft,
            result = _this$state.result;
      return draft ? children(draft, result, others) : "";
    }
  }]);

  return Setter;
}(Component);

export { Setter as default };