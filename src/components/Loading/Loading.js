import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function Loading(props) {
  const { size, className, style, align, showLabel, label } = props;
  const classes = classNames("loading-circle", {
    [`loading-${size}`]: true
  });
  const wrapperClass = classNames(
    {
      [`loading-wrapper-${align}`]: true
    },
    className,
    "loading-wrapper"
  );

  return (
    <div className={wrapperClass}>
      <div className={classes} style={style}>
        <i></i>
      </div>
      {showLabel ? <div className="loading-txt">{label}</div> : null}
    </div>
  );
}

Loading.defaultProps = {
  size: "md"
};
Loading.propTypes = {
  size: PropTypes.string
};
