function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import _set from "lodash/set";

let _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);

    _defineProperty(this, "data", {});
  }

  _createClass(_default, [{
    key: "set",
    value: function set(key, val) {
      _set(this.data, key, val);
    }
  }, {
    key: "get",
    value: function get() {
      return this.data;
    }
  }]);

  return _default;
}();

export { _default as default };