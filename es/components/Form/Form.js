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
 * @Last Modified time: 2019-04-12 10:53:21
 */
import React, { Component, Children, cloneElement } from "react";
import PropTypes from "prop-types";
import forEach from "lodash/forEach";
import get from "lodash/get";
import classNames from "classnames";
import FormItem from "./FormItem";
import DataMap from "./formDataMap";
import { Collector } from "./validators";
/**
 * 表单封装
 * 包含默认样式，表单验证的功能
 */

let Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  var _super = _createSuper2(Form);

  function Form(...args) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, ...args);

    _defineProperty(_assertThisInitialized(_this), "collector", new Collector());

    _defineProperty(_assertThisInitialized(_this), "dataMap", new DataMap());

    _defineProperty(_assertThisInitialized(_this), "renderChildrens", children => {
      const _this$props = _this.props,
            data = _this$props.data,
            showInfo = _this$props.showInfo;

      if (Array.isArray(children)) {
        return Children.map(children, child => {
          return _this.renderChildrens(child);
        });
      } // 遇到FormItem,则绑定id


      if (_this.isFormItem(children)) {
        const _children$props = children.props,
              field = _children$props.field,
              _onChange = _children$props.onChange,
              value = _children$props.value;
        const fieldData = data[field] || {};

        const dataMap = _this.dataMap.get();

        return (
          /*#__PURE__*/
          cloneElement(children, {
            data: dataMap,
            showInfo,
            collector: _this.collector,
            defaultValue: fieldData.value,
            value: value || dataMap[field],
            validators: fieldData.validators || [],
            onChange: val => {
              _this.dataMap.set(field, val);

              _onChange && _onChange(val, field);
            }
          })
        );
      } // 循环处理


      if (children.props && children.props.children) {
        const props = Object.assign({}, children.props, {
          children: _this.renderChildrens(children.props.children)
        });
        return Object.assign({}, children, {
          props
        });
      }

      return children;
    });

    return _this;
  }

  _createClass(Form, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.initData();
    }
  }, {
    key: "initData",
    value: function initData() {
      const data = this.props.data;
      forEach(data, (item = {}, key) => {
        this.dataMap.set(key, item.value);
      });
    }
    /**
     * 验证当前内容并返回表单的值
     * @public
     */

  }, {
    key: "validateAndSubmit",
    value: function validateAndSubmit() {
      const isOk = this.collector.validate();
      return isOk ? this.dataMap.get() : false;
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
    key: "isFormItem",
    value: function isFormItem(children) {
      const name = get(children, "type.displayName");
      return name === FormItem.displayName;
    }
  }, {
    key: "render",
    value: function render() {
      const _this$props2 = this.props,
            children = _this$props2.children,
            className = _this$props2.className,
            style = _this$props2.style;
      const classes = classNames("form", className);
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: classes,
          style: style
        }, this.renderChildrens(children))
      );
    }
  }]);

  return Form;
}(Component);

export { Form as default };
Form.propTypes = {
  /**
   * 表单对应的数据
   * 针对该数据会生成最终的表单数据
   */
  data: PropTypes.object.isRequired,

  /** 以信息形式展示表单 */
  showInfo: PropTypes.bool
};