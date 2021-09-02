import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import map from "lodash/map";
import filter from "lodash/filter";
import includes from "lodash/includes";

import Checkbox from "../Checkbox";
import DropDown from "../Dropdown";
import Icon from "../Icon";
import Button from "../Button";
import Input from "../Input";
import Item from "../Item";
import { useDefault } from "../../common/hooks";
import { nfn } from "../../common";
import closeIcon from "../DropdownInput/images/close.svg";
import linkCloseIcon from './images/delete-circle.svg';
import linkArrowIcon from './images/link-down-arrow.svg';

const { CheckboxGroup } = Checkbox;

const Overlay = props => {
  const {
    options,
    title,
    onChange,
    close,
    onEnsure,
    defaultValue,
    withSearch,
    withFooter,
    searchTxt,
    className,
    onSearch
  } = props;
  const classes = classNames(
    "checkbox-select-content",
    className
  );
  return (
    <div className={classes}>
      <Item show={withSearch}>
        <Input
          isSearch={true}
          onChange={onSearch}
          className="checkbox-select-search-input"
        />
      </Item>
      <CheckboxGroup
        className="checkbox-select-content-checkbox"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {map(
          searchTxt === ""
            ? options
            : filter(options, item => includes(item.label, searchTxt)),
          (item, index) => (
            <Checkbox
              key={`${item.label}-${index}`}
              label={item.label}
              value={item.value}
            />
          )
        )}
      </CheckboxGroup>
      <Item show={withFooter}>
        <div className="checkbox-select-button-wrap">
          <Button
            type="secondary"
            className="cancel"
            onClick={() => onChange([])}
          >
            清除
          </Button>
          <Button type="primary" className="confirm" onClick={onEnsure}>
            确定
          </Button>
        </div>
      </Item>
    </div>
  );
};
export default function CheckboxSelect({
  defaultValue,
  defaultOpen,
  withSearch,
  onChange,
  title,
  stopPropagation,
  trigger,
  options,
  emptyLabel,
  onDelete,
  className,
  isLink,
  overlayClassName,
  style,
  inline,
  getContainer
}) {
  const [value, setValue] = useDefault(defaultValue);
  const [searchTxt, setSearchTxt] = useState("");
  const [visible, setVisible] = useState(defaultOpen);

  const handleEnsure = useCallback(() => {
    onChange(value);
    setVisible(false);
  }, [onChange, value]);

  const handleSearch = useCallback(val => setSearchTxt(val), []);

	const handleSelectChange = useCallback(v => {
		setValue(v);
		onChange(v);
	}, [setValue, onChange]);

  const handleClose = useCallback(() => setVisible(false), []);

  const valueStr = filter(options, item => value.includes(item.value))
    .map(item => item.label)
    .join(",");

  const classes = classNames(
    "checkbox-select-wrap",
    isLink ? 'link' : '',
    onDelete ? className + " can-delete" : className
  );
  return (
    <div className={classes}>
      <DropDown
        asyncVisible={visible}
        onVisibleChange={setVisible}
        inline={inline}
        trigger={trigger}
        stopPropagation={stopPropagation}
        overlay={
          <Overlay
            options={options}
            title={title}
            className={overlayClassName}
            defaultValue={value}
            withSearch={withSearch}
            searchTxt={searchTxt}
            onSearch={handleSearch}
            onEnsure={handleEnsure}
            onChange={handleSelectChange}
            close={handleClose}
          />
        }
        defaultOpen={defaultOpen}
        getContainer={getContainer}
      >
        <div className="checkbox-select-result">
          {
            title ?
            <span className="checkbox-select-result-label">{title}</span>
            : null
          }
          <p className="checkbox-select-result-value" title={valueStr}>
            {valueStr || emptyLabel}
          </p>
          <Item show={isLink}>
            <Icon className="arrow-icon" link={linkArrowIcon}/>
          </Item>
          <Item show={onDelete && !isLink}>
            <Icon className="close-icon" link={closeIcon} onClick={onDelete} />
          </Item>
        </div>
      </DropDown>
      <Item show={onDelete && isLink}>
        <Icon className="close-icon" link={linkCloseIcon} onClick={onDelete} />
      </Item>
    </div>
  );
}

CheckboxSelect.propTypes = {
  /** 选项列表，包含label, value字段 */
  options: PropTypes.array,
  /** 标题 */
  title: PropTypes.string,
  /** 默认值 */
  defaultValue: PropTypes.array,
  /** 触发展示的方式 */
  trigger: PropTypes.oneOf(["click", "hover"]),
  /** 回调事件 */
  onChange: PropTypes.func,
  /** 支持搜索 */
  withSearch: PropTypes.bool,
  /** 支持底部按钮 */
  withFooter: PropTypes.bool,
  /** 浮层class */
  overlayClassName: PropTypes.string,
  /** 链接样式 */
  isLink: PropTypes.bool,
  /** 链接样式 */
  stopPropagation: PropTypes.bool,
  /** 为空 */
  emptyLabel: PropTypes.string,
  /** 删除回调 */
  onDelete: PropTypes.func
};
CheckboxSelect.defaultProps = {
  withSearch: false,
  withFooter: true,
  onDelete: null,
  isLink: false,
  emptyLabel: "",
  stopPropagation: true,
  onChange: nfn
};
