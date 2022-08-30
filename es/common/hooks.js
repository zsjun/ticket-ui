function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { useState, useEffect, useCallback, useMemo } from "react";
/**
 * 将普通的输入内容，转换为包含defaultValue, onChange的组件
 * 并且当defaultValue的值改变，组件的值也改变
 * @param {*} defaultValue 默认值
 * @param {Function} onChange 组件的回调
 * @param {Function} mapDefaultToValue 传入的值->给组件的值的映射
 * @param {Function} mapValuetoValue 组件的值->最终传出的值的映射
 * @param {Boolean} mapValueWhenChange 组件的值变化时，是否对value进行映射
 */

export const useControlledInputs = ({
  defaultValue,
  onChange,
  mapDefaultToValue,
  mapValuetoValue,
  mapValueWhenChange = true,
  props
}) => {
  const _useState = useState(() => mapDefaultToValue(defaultValue, props)),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

  useEffect(() => {
    setValue(mapDefaultToValue(defaultValue, props));
  }, [defaultValue]);

  const handleChange = val => {
    const value = mapValueWhenChange ? mapValuetoValue(val, props) : val;
    setValue(value);
    onChange(mapValuetoValue(val, props));
  };

  return {
    value,
    handleChange,
    setValue
  };
};
/**
 * 当defaultValue改变时，value也改变
 */

export const useDefault = defaultValue => {
  const _useState3 = useState(defaultValue),
        _useState4 = _slicedToArray(_useState3, 2),
        value = _useState4[0],
        setValue = _useState4[1];

  useEffect(() => {
    if (defaultValue !== value) {
      setValue(defaultValue);
    }
  }, [defaultValue]);
  return [value, setValue];
};
export const useClientRect = () => {
  const _useState5 = useState({}),
        _useState6 = _slicedToArray(_useState5, 2),
        rect = _useState6[0],
        setRect = _useState6[1];

  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}; // 获取对应元素的dropdown位置

export const useDropdownPosition = (ref, getContainer) => {
  const container = getContainer && getContainer(ref.current) || document.body;
  const rect = ref.current && ref.current.getBoundingClientRect ? ref.current.getBoundingClientRect() : {};
  const containerRect = container && container.getBoundingClientRect() || {};
  const scrollTop = container && container.scrollTop || 0;
  const scrollLeft = container && container.scrollLeft || 0;
  const position = useMemo(() => ({
    width: rect.width,
    left: rect.left - containerRect.left + scrollLeft || 0,
    top: rect.top + rect.height - containerRect.top + scrollTop || 0
  }), [rect.width, rect.left, rect.top, rect.height, containerRect.left, containerRect.top, scrollLeft, scrollTop]);
  return [position, ref];
};