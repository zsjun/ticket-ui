function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import isObject from "lodash/isObject";
import isArray from "lodash/isArray";
import isFunc from "lodash/isFunction";
export let Dep =
/*#__PURE__*/
function () {
  function Dep() {
    _classCallCheck(this, Dep);

    _defineProperty(this, "deps", new Set());
  }

  _createClass(Dep, [{
    key: "listen",
    value: function listen(fn) {
      this.deps.add(fn);
    }
  }, {
    key: "fire",
    value: function fire() {
      this.deps.forEach(fn => isFunc(fn) && fn());
    }
  }, {
    key: "clear",
    value: function clear() {
      this.deps.clear();
    }
  }, {
    key: "remove",
    value: function remove(fn) {
      this.deps.delete(fn);
    }
  }]);

  return Dep;
}();
export function observable(o, dep) {
  if (!isObject(o) && !isArray(o)) {
    return o;
  }

  return defineReactive(o, dep);
}
export function observe(fn, dep) {
  dep.listen(fn);
}
export function unobserve(fn, dep) {
  dep.remove(fn);
}

function defineReactive(obj, dep) {
  return new Proxy(obj, {
    get: (target, prop, receiver) => {
      if (prop in obj && prop !== "prototype") {
        return observable(Reflect.get(target, prop), dep);
      }

      return Reflect.get(target, prop, receiver);
    },
    set: (target, prop, value) => {
      const result = Reflect.set(target, prop, value); // 触发订阅

      dep.fire();
      return result;
    }
  });
}