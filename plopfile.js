const zsjgenerateCompConfig = require("./plopConfig/zsj/generateComp");
// const zsjgenerateContainerConfig = require('./plopConfig/zsj/zsjGenerateContainer');
// const zsjTestConfig = require('./plopConfig/zsj/zsjTest');
// const zsjReducersConfig = require('./plopConfig/zsj/zsjGenerateReducer');
// const xjwGenerateList = require('./plopConfig/xjw/xjwGenerateList');

module.exports = (plop) => {
  plop.setHelper(
    "upperCase",
    (string) => string.charAt(0).toUpperCase() + string.slice(1)
  );
  plop.setHelper(
    "lowerCase",
    (string) => string.charAt(0).toLowerCase() + string.slice(1)
  );
  plop.setGenerator("component", zsjgenerateCompConfig);
  // plop.setGenerator('zsjContainer', zsjgenerateContainerConfig);
  // plop.setGenerator('zsjReducers', zsjReducersConfig);
  // plop.setGenerator('test', zsjTestConfig);
  // plop.setGenerator('list', xjwGenerateList);
};
