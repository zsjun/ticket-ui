import React, { useState, Fragment, useCallback, useMemo } from "react";
import Radio from "../Radio";
import Dropdown from "../Dropdown";
import PropTypes from "prop-types";
import Button from "../Button";
import CheckboxFilter from "./CheckboxFilter";
import Icon from "../Icon";
import { filter } from "lodash";

import filterOptions, { OptionLabel } from "./FilterOptions";
import filterIcon from "./images/filter.svg";

const RadioGroup = Radio.RadioGroup;

function getFilterItemName(option, value) {
  let filterArr = option.filter(item => value.includes(item.value));
  if (
    filterArr.length === 0 ||
    (option.length > 1 && filterArr.length === option.length)
  ) {
    return "";
  } else {
    return filterArr.map(i => i.label).join(",");
  }
}

function Overlay(props) {
  const {
    options,
    onReset,
    valueObj,
    optionConfig,
    onChangeItem,
    optionFilters,
    customOptions,
    customOptionsPos,
    submit
  } = props;
  const { time_range } = valueObj;
  return (
    <div className="quick-filter-comp-overlay">
      {customOptionsPos === "prepend" ? (
        <Fragment>
          {customOptions.map(item => {
            return (
              <div>
                <div className="quick-filter-comp-group">
                  <div className="group-title">
                    <div className="title">{item.label}</div>
                  </div>
                  <div>{item.render()}</div>
                </div>
              </div>
            );
          })}
        </Fragment>
      ) : null}
      {options.map(item => {
        if (item === "time_range") {
          return (
            <div className="time-group">
              <div className="time-group-title">时间</div>
              <RadioGroup
                defaultValue={time_range}
                onChange={val => onChangeItem("time_range", val)}
              >
                {filterOptions.time_range.map((item, index) => (
                  <Radio
                    key={index}
                    label={item.label}
                    value={item.value}
                    defaultChecked={time_range === item.value}
                  />
                ))}
              </RadioGroup>
            </div>
          );
        } else {
          const options = filterOptions[item];

          const filterFn = filter(optionFilters, d => d.type === item)[0] || {
            fn: d => true
          };

          const resultOptions = options.filter(d => filterFn.fn(d));

          return (
            <CheckboxFilter
              defaultValue={valueObj[item]}
              options={resultOptions}
              dataKey={item}
              config={optionConfig[item]}
              onChange={onChangeItem}
              label={OptionLabel[item]}
            />
          );
        }
      })}
      {customOptionsPos === "append" ? (
        <Fragment>
          {customOptions.map(item => {
            return (
              <div>
                <div className="quick-filter-comp-group">
                  <div className="group-title">
                    <div className="title">{item.label}</div>
                  </div>
                  <div>{item.render()}</div>
                </div>
              </div>
            );
          })}
        </Fragment>
      ) : null}
      <div className="filter-diag-oper">
        <Button type="reset" className="mini" onClick={onReset}>
          重置
        </Button>
        <Button type="primary" className="mini" onClick={submit}>
          提交
        </Button>
      </div>
    </div>
  );
}

function QuickFilter(props) {
  const [showDropDown, setShowDropDown] = React.useState(false);
  const {
    valueObj,
    options,
    onSubmit,
    customOptions,
    customOptionsSelectedFn,
    optionFilters
  } = props;
  const isDefaultFilter = useCallback(() => {
    let isDefault = true;
    for (var i = 0; i < options.length; i++) {
      let key = options[i];
      if (key === "time_range") {
        if (valueObj[key] !== "seven_days") {
          isDefault = false;
          break;
        }
      } else {
        if (valueObj[key].length !== 0) {
          isDefault = false;
          break;
        }
      }
    }
    return isDefault;
  }, [valueObj, options]);

  const submit = useCallback(() => {
    setShowDropDown(false);
    onSubmit();
  }, [onSubmit]);

  const getFilterName = useCallback(() => {
    let optionNameList = options
      .filter(i => i !== "time_range")
      .map(item => {
        const options = filterOptions[item];
        const filterFn = filter(
          optionFilters,
          item => item.type === item
        )[0] || { fn: d => true };

        return {
          option: options.filter(filterFn.fn),
          value: valueObj[item]
        };
      })
      .map(item => getFilterItemName(item.option, item.value))
      .filter(i => i !== "");

    let customOptionsSelectedList;
    let appendStr;
    if (customOptions.length > 0) {
      customOptionsSelectedList = customOptionsSelectedFn(valueObj);
      appendStr =
        optionNameList.concat(customOptionsSelectedList).join("-") || "全部";
    } else {
      appendStr = optionNameList.join("-") || "全部";
    }

    if (options.includes("time_range")) {
      return (
        filterOptions["time_range"].filter(
          item => item.value === valueObj["time_range"]
        )[0].label +
        "-" +
        appendStr
      );
    } else {
      return appendStr;
    }
  }, [valueObj, options]);

  return (
    <div className="quick-filter-comp">
      <Dropdown
        overlay={<Overlay submit={submit} {...props} />}
        visible={showDropDown}
        onVisibleChange={setShowDropDown}
        trigger="hover"
        overlayClassName="quick-filter-comp-overlay"
        className="dropdown"
      >
        <a className="dropdown-filter">
          {isDefaultFilter() ? (
            <Icon className="icon-filter" link={filterIcon} fill="#666666" />
          ) : (
            <Icon className="icon-filter" link={filterIcon} fill="#3773c7" />
          )}
          筛选:{getFilterName()}
        </a>
      </Dropdown>
    </div>
  );
}

QuickFilter.propTypes = {
  /** 筛选项 */
  options: PropTypes.array,
  /** 自定义筛选项 */
  customOptions: PropTypes.array,
  /** 自定义筛选项位置 */
  customOptionsPos: PropTypes.oneOf(["prepend", "append"]),
  /** 自定义选中筛选项渲染 */
  customOptionsSelectedFn: PropTypes.func,
  /** 点击筛选项的回调事件 */
  onChangeItem: PropTypes.func,
  /** 点击重置的回调事件 */
  onReset: PropTypes.func,
  /** 点击重置的回调事件 */
  onSubmit: PropTypes.func,
  /** 值改变时，是否改变点击按钮的内容 */
  changeValue: PropTypes.bool,
  /** 选项配置 */
  optionConfig: PropTypes.any,
  /** 选项默认值 */
  valueObj: PropTypes.any,
  /** 筛选options */
  optionFilters: PropTypes.array
};

QuickFilter.defaultProps = {
  onChange: () => {},
  optionConfig: {},
  customOptions: [],
  optionFilters: [],
  customOptionsPos: "append",
  customOptionsSelectedFn: () => {}
};

export default QuickFilter;
