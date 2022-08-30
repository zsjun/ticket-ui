function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Alert from '../index';
import React from 'react';
import { shallow } from 'enzyme';
const props = {
  message: '测试',
  description: 'aaa'
};
describe('Alert', () => {
  it('render success alert', () => {
    const comp = shallow(
    /*#__PURE__*/
    React.createElement(Alert, _extends({}, props, {
      type: "success"
    })));
    expect(comp).toMatchSnapshot();
    expect(comp.find('.base-alert-success').length).toBe(1);
    expect(comp.find('.base-alert-message').text()).toEqual(props.message);
    expect(comp.find('.base-alert-description').text()).toEqual(props.description);
  });
  it('render error alert', () => {
    const comp = shallow(
    /*#__PURE__*/
    React.createElement(Alert, _extends({}, props, {
      type: "error"
    })));
    expect(comp).toMatchSnapshot();
    expect(comp.find('.base-alert-error').length).toBe(1);
  });
});