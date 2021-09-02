import React from 'react';
import classNames from 'classnames';
import Loading from './Loading';
export default function LoadingBox(props) {
  const className = props.className,
        children = props.children,
        style = props.style;
  const classes = classNames('loading-box', className);
  return (
    /*#__PURE__*/
    React.createElement("div", {
      className: classes,
      style: style
    },
    /*#__PURE__*/
    React.createElement(Loading, {
      size: "lg",
      className: "loading-box-icon"
    }), children)
  );
}