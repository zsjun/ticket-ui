import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import Dialog from "./Modal";
/**
 * 通用的confirm方法
 * @param {Object} config 配置信息
 */

export default function confirm(config) {
  const _config$title = config.title,
        title = _config$title === void 0 ? "提示" : _config$title,
        _config$cancelTxt = config.cancelTxt,
        cancelTxt = _config$cancelTxt === void 0 ? "取消" : _config$cancelTxt,
        _config$ensureTxt = config.ensureTxt,
        ensureTxt = _config$ensureTxt === void 0 ? "确定" : _config$ensureTxt,
        _config$body = config.body,
        body = _config$body === void 0 ? "" : _config$body,
        _config$isAlert = config.isAlert,
        isAlert = _config$isAlert === void 0 ? false : _config$isAlert,
        _config$width = config.width,
        width = _config$width === void 0 ? 500 : _config$width;
  const style = {
    content: {
      width
    }
  };
  let div = document.createElement("div");
  document.body.appendChild(div);

  function close(...args) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);

    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  const footer = isAlert ?
  /*#__PURE__*/
  React.createElement(Button, {
    type: "primary",
    width: "80",
    onClick: close
  }, "\u786E\u5B9A") : undefined;
  return new Promise((resolve, reject) => {
    function ensure() {
      close();
      resolve();
    }

    function cancel() {
      close();

      if (!isAlert) {
        /*eslint-disable*/
        reject();
        /*eslint-disable*/
      }
    }

    ReactDOM.render(
    /*#__PURE__*/
    React.createElement(Dialog, {
      isOpen: true,
      title: title,
      footer: footer,
      style: style,
      handleEnsure: ensure,
      handleCancel: cancel,
      btnCancelTxt: cancelTxt,
      btnEnsureTxt: ensureTxt
    },
    /*#__PURE__*/
    React.createElement("div", null, body)), div);
  });
}