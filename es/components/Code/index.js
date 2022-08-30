import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import jsonFormat from "json-format";
import JSONPretty from "react-json-pretty";
import map from "lodash/map";
import isString from "lodash/isString";
import { stringfy } from "../../common";
/**
 * 针对代码块的统一封装，提供table,json两种格式
 */

function Code(props) {
  const data = props.data,
        type = props.type,
        className = props.className,
        labelWidth = props.labelWidth,
        style = props.style;
  const cls = classNames("code-wrap", className);

  if (type === "json") {
    const json = jsonFormat(data);
    return (
      /*#__PURE__*/
      React.createElement("div", {
        className: cls,
        style: style
      },
      /*#__PURE__*/
      React.createElement(JSONPretty, {
        json: json
      }))
    );
  }

  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: cls,
      style: style
    },
    /*#__PURE__*/
    React.createElement("table", {
      className: "code-table"
    },
    /*#__PURE__*/
    React.createElement("thead", {
      className: "code-thead"
    },
    /*#__PURE__*/
    React.createElement("tr", null,
    /*#__PURE__*/
    React.createElement("th", {
      className: "key"
    }, "KEY"),
    /*#__PURE__*/
    React.createElement("th", {
      className: "value"
    }, "VALUE"))),
    /*#__PURE__*/
    React.createElement("tbody", {
      className: "code-tbody"
    }, map(data, (item, key) => {
      return (
        /*#__PURE__*/
        React.createElement("tr", {
          className: "code-tr-content",
          key: key
        },
        /*#__PURE__*/
        React.createElement("td", {
          className: "key",
          style: {
            width: labelWidth
          }
        }, key),
        /*#__PURE__*/
        React.createElement("td", {
          className: "value"
        }, isString(item) ? item : stringfy(item)))
      );
    }))))
  );
}

Code.defaultProps = {
  type: "table"
};
Code.propTypes = {
  /** 要展示的代码 */
  data: PropTypes.object,

  /** 展示的数据类型 */
  type: PropTypes.oneOf(["table", "json"]),

  /** 表格的标签宽度 */
  labelWidth: PropTypes.string
};
export default Code;