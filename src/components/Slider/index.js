import React, { Component } from 'react';
import RcSlider, { Range as RcRange } from 'rc-slider';

import PropTypes from "prop-types";
import 'rc-slider/assets/index.css';

const Handle = RcSlider.Handle;

const handle = (props, otherProps) => {
  const { value, dragging, index, ...restProps  } = props;
    return <div>
        <Handle value={value} {...restProps} />
        {
            !otherProps.hideStepLabel ?
            <div className="slider-thumb-value" style={{"left": value + '%'}}>{value}{otherProps.unit ? otherProps.unit : ''}</div>
            : null
        }
    </div>;
};

export default class Slider extends Component {

    render() {
        const { defaultValue, value, onChange, suffixUnit, marks, step, unit, hideStepLabel, style } = this.props;
        return <div className="slider-wrapper" style={style}>
            <RcSlider
            trackStyle={{ backgroundColor: '#3a7eea', height: 3  }}
            railStyle={{ backgroundColor: '#d6dce7', height: 3  }}
						activeDotStyle={{ borderColor: "#3a7eea" }}
						marks={marks}
            handle={(props) => handle(props, { unit: unit, hideStepLabel: hideStepLabel })}
            onChange={onChange}
            defaultValue={defaultValue}
            value={value}
						step={step}
						handleStyle={{
							borderColor: '#3a7eea',
							height: 14,
							width: 14,
							backgroundColor: '#fff',
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0)'
						}}
            />
        </div>
    }
}

Slider.defaultProps = {
  defaultValue: 0,
    unit: '%',
		step: 1,
    hideStepLabel: false,
    style: {},
    onChange: () =>{}
};

Slider.propTypes = {
    defaultValue: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hideStepLabel: PropTypes.bool.isRequired,
		marks: PropTypes.object,
		step: PropTypes.object,
		style: PropTypes.object
};

class Range extends Component {
    render() {
        const { defaultValue, value, pushable, onChange, suffixUnit, marks, step, unit, hideStepLabel, style } = this.props;
        return <div className="slider-wrapper" style={style}>
            <RcRange
            trackStyle={[{ backgroundColor: '#3a7eea', height: 3  }, { backgroundColor: '#3a7eea', height: 3  }]}
            railStyle={{ backgroundColor: '#d6dce7', height: 3  }}
						activeDotStyle={{ borderColor: "#3a7eea" }}
						marks={marks}
            handle={(props) => handle(props, { unit: unit, hideStepLabel: hideStepLabel })}
            onChange={onChange}
            defaultValue={defaultValue}
            pushable={pushable}
            allowCross={false}
            value={value}
						step={step}
						handleStyle={[{
							borderColor: '#3a7eea',
							height: 14,
							width: 14,
							backgroundColor: '#fff',
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0)'
            },
            {
							borderColor: '#3a7eea',
							height: 14,
							width: 14,
							backgroundColor: '#fff',
							boxShadow: '0 2px 4px rgba(0, 0, 0, 0)'
            }
            ]}
            />
        </div>
    }
}

Range.defaultProps = {
  defaultValue: [0, 0],
  pushable: 10,
  unit: '%',
  step: 1,
  hideStepLabel: false,
  style: {},
  onChange: () =>{}
};

Range.propTypes = {
    defaultValue: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    hideStepLabel: PropTypes.bool.isRequired,
		marks: PropTypes.object,
		step: PropTypes.object,
		style: PropTypes.object
}

Slider.Range = Range;
