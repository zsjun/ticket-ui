import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import iconEmpty from './images/empty.svg';

export default function NoResult(props) {
  const {desc, className, style, icon} = props;
  const classes = classNames('no-result', className);
  return (
    <div role="no-result" className={classes} style={style}>
      <Icon className="no-result-icon" link={icon || iconEmpty} />
      <p>{desc}</p>
    </div>
  );
}
NoResult.propTypes = {
  /** 无数据时的描述 */
  desc: PropTypes.string
};
NoResult.defaultProps = {
  desc: '暂无数据'
};
