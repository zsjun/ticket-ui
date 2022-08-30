import React, { useRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useControlledInputs } from "../../common/hooks";
import Input from "../Input";
import Button from "../Button";
import { nfn } from "../../common";

const mapDefaultToValue = v => ({
  name: v
});

const mapValuetoValue = e => e.target.files[0];
/**
 * 文件上传模块
 */


export default function FileUpload({
  defaultValue,
  onChange,
  hasError,
  className,
  style
}) {
  const inputRef = useRef(null);

  const _useControlledInputs = useControlledInputs({
    defaultValue,
    onChange,
    mapDefaultToValue,
    mapValuetoValue
  }),
        value = _useControlledInputs.value,
        handleChange = _useControlledInputs.handleChange;

  const selectFiles = () => {
    inputRef.current.click();
  };

  const classes = classNames("file-upload", className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement("input", {
      type: "file",
      ref: inputRef,
      onChange: handleChange,
      className: "file-upload-hide"
    }),
    /*#__PURE__*/
    React.createElement(Input, {
      hasError: hasError,
      disabled: true,
      defaultValue: value.name,
      className: "file-upload-name"
    }),
    /*#__PURE__*/
    React.createElement(Button, {
      type: "secondary",
      className: "file-upload-button",
      onClick: selectFiles
    }, "\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"))
  );
}
FileUpload.defaultProps = {
  onChange: nfn
};
FileUpload.propTypes = {
  /** 事件回调 */
  onChange: PropTypes.func,

  /** 默认值 */
  defaultValue: PropTypes.any,

  /** 是否Error, 自带error样式 */
  hasError: PropTypes.bool
};