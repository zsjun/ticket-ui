function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _remove from "lodash/remove";
const validators = {
  required(value) {
    if (Array.isArray(value)) {
      return value && !!value.length;
    }

    return value && value !== 0;
  },

  length(value, range) {
    const len = value.toString().length;
    let min = range[0] && range[0] !== 0 ? len >= range[0] : true;
    let max = range[1] && range[1] !== 0 ? len <= range[1] : true;
    return min && max;
  },

  phone(value) {
    const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
    return reg.test(value);
  },

  email(value) {
    const reg = /[\w!#$ %& '*+/=?^_`{|}~-]+(?:\.[\w!#$%&' * +/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
    return reg.test(value);
  },

  id(value) {
    const reg = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
    return reg.test(value);
  },

  url(value) {
    const reg = /[a-zA-z]+:\/\/[^\s]*/;
    return reg.test(value);
  }

};
export default function (value, rule, data) {
  if (rule.required) {
    return validators.required(value);
  }

  if (rule.length) {
    return validators.length(value, rule.length);
  }

  if (rule.type && Object.keys(validators).indexOf(rule.type) >= 0) {
    if (!value && value !== 0) {
      return true;
    }

    return validators[rule.type](value);
  } // 验证函数


  if (rule.fn) {
    return rule.fn(value, data);
  } // 正则


  if (rule.reg) {
    return rule.reg.test(value);
  }

  return true;
}
export let Collector =
/*#__PURE__*/
function () {
  function Collector() {
    _classCallCheck(this, Collector);

    _defineProperty(this, "list", []);
  }

  _createClass(Collector, [{
    key: "add",
    value: function add(item) {
      this.list.push(item);
    }
  }, {
    key: "remove",
    value: function remove(item) {
      _remove(this.list, item);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list = [];
    }
  }, {
    key: "validate",
    value: function validate() {
      const ok = this.list.map(item => item.validate()).every(Boolean);
      return ok;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.list.forEach(item => item.reset());
    }
  }]);

  return Collector;
}();