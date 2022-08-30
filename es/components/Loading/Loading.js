import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export default function Loading(props) {
  const size = props.size,
        className = props.className,
        style = props.style;
  const classes = classNames({
    ["loading-".concat(size)]: true
  }, className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "bar"
    }))
  );
}
Loading.defaultProps = {
  size: 'sm'
};
Loading.propTypes = {
  size: PropTypes.string
};