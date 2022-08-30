/*
 * @Author: wangweixin
 * @Date: 2017-11-30 15:11:38
 * @Last Modified by: wangweixin
 * @Last Modified time: 2019-01-18 11:00:00
 */
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../Icon";
import successIcon from "./images/success.svg";
import errorIcon from "./images/error.svg";
const typeMap = {
  success: successIcon,
  error: errorIcon
};
/**
 * 基本的消息提示
 * 目前用于表单提示后的信息
 * 注： 目前只封装了success, error两种样式，待设计完善
 */

function Alert(props) {
  const message = props.message,
        description = props.description,
        type = props.type,
        className = props.className,
        style = props.style;
  const classes = classNames("base-alert", "base-alert-".concat(type), className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    }, typeMap[type] ?
    /*#__PURE__*/
    React.createElement(Icon, {
      className: "base-alert-icon",
      link: typeMap[type]
    }) : "",
    /*#__PURE__*/
    React.createElement("div", {
      className: "base-alert-content"
    },
    /*#__PURE__*/
    React.createElement("p", {
      className: "base-alert-message"
    }, message),
    /*#__PURE__*/
    React.createElement("p", {
      className: "base-alert-description"
    }, description)))
  );
}

Alert.defaultProps = {
  type: "success"
};
Alert.propTypes = {
  /** 提示标题 */
  message: PropTypes.string,

  /** 提示描述 */
  description: PropTypes.string,

  /** 提示类型 */
  type: PropTypes.oneOf(["success", "error"])
};
export default Alert;