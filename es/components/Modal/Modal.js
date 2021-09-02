function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/*
 * @Author: wangweixin
 * @Date: 2017-11-28 15:30:27
 * @Last Modified by: zsj
 * @Last Modified time: 2019-09-16 19:32:42
 */
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import merge from "lodash/merge";
import Button from "../Button";
import Item from "../Item";
import Icon from "../Icon";
import closeIcon from "./images/close.svg";
const baseModalStyle = {
  overlay: {
    backgroundColor: "rgba(27, 29, 31, 0.5)",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    bottom: "auto",
    border: "none",
    background: "#FFF",
    overflow: "hidden",
    borderRadius: "2px",
    outline: "none",
    padding: "0px",
    width: "700px",
    zIndex: 10,
    maxHeight: window.innerHeight - 100
  }
};

function ModalContent(props) {
  const title = props.title,
        children = props.children,
        footer = props.footer,
        handleCancel = props.handleCancel,
        handleEnsure = props.handleEnsure,
        style = props.style,
        closable = props.closable,
        btnCancelTxt = props.btnCancelTxt,
        btnEnsureTxt = props.btnEnsureTxt,
        className = props.className,
        isOpen = props.isOpen,
        other = _objectWithoutProperties(props, ["title", "children", "footer", "handleCancel", "handleEnsure", "style", "closable", "btnCancelTxt", "btnEnsureTxt", "className", "isOpen"]);

  const classes = classNames(className, "modal-content");

  if (!isOpen) {
    return null;
  }

  const styles = merge({}, baseModalStyle, style);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "modal",
      style: styles.overlay
    },
    /*#__PURE__*/
    React.createElement("div", _extends({
      className: "".concat(classes),
      style: styles.content
    }, other),
    /*#__PURE__*/
    React.createElement(Item, {
      show: title
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "modal-header"
    }, title,
    /*#__PURE__*/
    React.createElement(Item, {
      show: closable
    },
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "closeIcon",
      onClick: handleCancel,
      link: closeIcon
    })))),
    /*#__PURE__*/
    React.createElement("div", {
      className: "modal-body"
    }, children),
    /*#__PURE__*/
    React.createElement("div", {
      className: "modal-footer"
    }, !footer ?
    /*#__PURE__*/
    React.createElement("div", {
      className: "footer-btn-wrap"
    },
    /*#__PURE__*/
    React.createElement(Button, {
      type: "cancel",
      width: "80",
      onClick: handleCancel
    }, btnCancelTxt),
    /*#__PURE__*/
    React.createElement(Button, {
      type: "primary",
      width: "80",
      onClick: handleEnsure
    }, btnEnsureTxt)) : footer)))
  );
}

export default function Modal(props) {
  return (
    /*#__PURE__*/
    ReactDom.createPortal(
    /*#__PURE__*/
    React.createElement(ModalContent, props), document.body)
  );
}
Modal.defaultProps = {
  closable: true,
  btnCancelTxt: "取消",
  btnEnsureTxt: "确定"
};
Modal.propTypes = {
  /** 弹框标题，可以是string, 也可以是节点 */
  title: PropTypes.any,

  /** 自定义底部按钮，假设进行自定义，需要手动为按钮绑定回调事件 */
  footer: PropTypes.any,

  /** 是否展示关闭按钮 */
  closable: PropTypes.bool,

  /** 控制弹窗的展示状态 */
  isOpen: PropTypes.bool,

  /** 取消的回调事件 */
  handleCancel: PropTypes.func,

  /** 确定的回调事件 */
  handleEnsure: PropTypes.func,

  /**
   * 样式设定
   * {
   *   overlay: 蒙版,
   *   content: 内容
   * }
   */
  style: PropTypes.object,

  /** 修改取消按钮的内容 */
  btnCancelTxt: PropTypes.any,

  /** 修改确定按钮的内容 */
  btnEnsureTxt: PropTypes.any
};