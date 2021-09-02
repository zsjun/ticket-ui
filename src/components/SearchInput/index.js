/*
 * @Author: sunxiaoshen
 * @Date: 2019-08-06
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import classNames from "classnames";

import Input from "../Input";
import PropTypes from "prop-types";
import Icon from "../Icon";
import delIcon from "./images/del.svg";

import { useDefault } from "../../common/hooks";

import { nfn } from "../../common";

function SearchInput({
  defaultValue = "",
  onChange,
  onSearch,
  placeholder,
  inputStyle,
  addon,
  className
}) {
  const [value, setValue] = useDefault(defaultValue);

  const onValueChange = val => {
    setValue(val);
    onChange(val);
  };

  const classes = classNames("search-input", className);

  return (
    <div className={classes}>
      <Input
        defaultValue={value}
        onChange={onValueChange}
        placeholder={placeholder}
        style={inputStyle}
        onKeyDown={e => {
          if(e.keyCode === 13) {
            onSearch && onSearch()
          }
        }}
      />

      {value.trim().length > 0 ? (
        <Icon
          onClick={() => {
            setValue("");
            onChange("");
          }}
          className="del-icon"
          link={delIcon}
        />
      ) : null}
      {
        addon ?
        <span onClick={onSearch}>{addon}</span> :
        <input
          type="button"
          className="btn btn-search-addon"
          onClick={onSearch}
          value="搜索"
        />
      }
    </div>
  );
}
SearchInput.defaultProps = {
  clearable: true,
  onChange: nfn
};
SearchInput.propTypes = {
  /** 默认值，必须是options中的value的值 */
  defaultValue: PropTypes.any,
  /** change回调 */
  onChange: PropTypes.func,
  /** 搜索回调 */
  onSearch: PropTypes.func
};
export default React.memo(SearchInput);
