function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

/*
 * @Author: wangweixin
 * @Date: 2017-12-15 11:00:25
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-04-04 19:51:06
 */
import React, { Component, cloneElement } from "react";
import PropTypes from "prop-types";
import forEach from "lodash/forEach";
import debounce from "lodash/debounce";
import set from "lodash/set";
import isFunction from "lodash/isFunction";
import classNames from "classnames";
import { Collector } from "./validators";
/**
 * 表单封装
 * 包含默认样式，表单验证的功能
 */

let SmartForm =
/*#__PURE__*/
function (_Component) {
  _inherits(SmartForm, _Component);

  var _super = _createSuper2(SmartForm);

  function SmartForm(...args) {
    var _this;

    _classCallCheck(this, SmartForm);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "collector", new Collector());

    _defineProperty(_assertThisInitialized(_this), "state", {
      dataMap: {}
    });

    _defineProperty(_assertThisInitialized(_this), "renderItem", (children, others) => {
      const _this$props = _this.props,
            data = _this$props.data,
            showInfo = _this$props.showInfo;
      const dataMap = _this.state.dataMap;
      const _children$props = children.props,
            field = _children$props.field,
            onChange = _children$props.onChange,
            value = _children$props.value;
      const fieldData = data[field] || {};
      return (
        /*#__PURE__*/
        cloneElement(children, _objectSpread2({
          key: field,
          data: dataMap,
          showInfo,
          collector: _this.collector,
          defaultValue: fieldData.value,
          value: value || dataMap[field],
          validators: fieldData.validators || [],
          onChange: debounce(val => {
            _this.setState({
              dataMap: _objectSpread2(_objectSpread2({}, dataMap), {}, {
                [field]: val
              })
            });

            onChange && onChange(val);
          }, 300)
        }, others))
      );
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", (field, val) => {
      const dataMap = _this.state.dataMap;

      _this.setState({
        dataMap: _objectSpread2(_objectSpread2({}, dataMap), {}, {
          [field]: val
        })
      });
    });

    return _this;
  }

  _createClass(SmartForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initData();
    }
  }, {
    key: "initData",
    value: function initData() {
      const data = this.props.data;
      let dataMap = {};
      forEach(data, (item = {}, key) => {
        set(dataMap, key, item.value);
      });
      this.setState({
        dataMap
      });
    }
    /**
     * 验证当前内容并返回表单的值
     * @public
     */

  }, {
    key: "validateAndSubmit",
    value: function validateAndSubmit() {
      const dataMap = this.state.dataMap;
      const isOk = this.collector.validate();
      return isOk ? dataMap : false;
    }
    /**
     * 重新初始化表单
     * @public
     */

  }, {
    key: "reset",
    value: function reset() {
      this.initData();
      this.collector.reset();
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            style = _this$props2.style;
      const dataMap = this.state.dataMap;
      const classes = classNames("form", className);

      if (!isFunction(children)) {
        throw new Error("children必须为函数");
      }

      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes,
          style: style
        }, children(dataMap, this.renderItem, this.setValue))
      );
    }
  }]);

  return SmartForm;
}(Component);

export { SmartForm as default };
SmartForm.propTypes = {
  /**
   * 表单对应的数据
   * 针对该数据会生成最终的表单数据
   */
  data: PropTypes.object.isRequired,

  /** 以信息形式展示表单 */
  showInfo: PropTypes.bool
};