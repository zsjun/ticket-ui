import { setDefaultPortalSelector } from "./portalHelpers";

export const config = {
  errorResolver: () => "出错了"
};

const handlers = {
  defaultPortalSelector: fn => {
    if (typeof fn === "function") {
      setDefaultPortalSelector(fn);
    }
  },
  errorResolver: fn => {
    if (typeof fn === "function") {
      config.errorResolver = fn;
    }
  },
  timeRangeResolver: fn => {
    if (typeof fn === "function") {
      config.timeRangeResolver = fn;
    }
  }
};

export default config => {
  config = config && typeof config === "object" ? config : {};
  for (let key in config) {
    if (config.hasOwnProperty(key) && handlers[key]) {
      handlers[key](config[key]);
    }
  }
};
