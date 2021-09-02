import React from 'react';
import PropTypes from 'prop-types';
export default function LoadingBar(props) {
  const className = props.className,
        style = props.style;
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: "loading-bar ".concat(className),
      style: style
    },
    /*#__PURE__*/
    React.createElement("div", {
      className: "loading-bar-background"
    }),
    /*#__PURE__*/
    React.createElement("div", {
      className: "loading-bar-foreground"
    }))
  );
}
LoadingBar.propTypes = {
  className: PropTypes.string
};