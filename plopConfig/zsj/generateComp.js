// const FILE_PATH = 'src/components';
const config = require("./config");
const { defaultCssPath, defaultCompPath, defaultIndexPath } = config;

module.exports = {
  description: "生成器的描述",
  prompts: [
    // 发出的命令行问题,input 是输入，list 是选择，confirm是否
    {
      type: "input",
      name: "compPath",
      message: "输入生成组件的路径",
      default: defaultCompPath,
    },
    {
      type: "input",
      name: "compName",
      message: "component name",
      default: config.defaultCompName,
    },
    {
      type: "confirm",
      name: "isComp",
      message: "确定confirm",
      default: true,
    },
  ],
  actions: (data) => {
    const actions = [];
    const { compName, isComp, compPath } = data;
    if (!isComp) {
      return actions;
    }
    actions.push(
      // 问题完成后的动作
      {
        type: "add", // 添加一个全新的文件
        path: `${compPath}/${compName}/index.scss`,
        templateFile: "plop-templates/zsj/component.scss.hbs",
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );
    actions.push(
      // 问题完成后的动作
      {
        type: "add", // 添加一个全新的文件
        path: `${compPath}/${compName}/index.tsx`,
        templateFile: "plop-templates/zsj/component.hbs",
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );
    actions.push(
      // 问题完成后的动作
      {
        type: "add", // 添加一个全新的文件
        path: `${compPath}/${compName}/index.stories.tsx`,
        templateFile: "plop-templates/zsj/component.stories.hbs",
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );
    actions.push(
      // 问题完成后的动作
      {
        type: "add", // 添加一个全新的文件
        path: `${compPath}/${compName}/index.test.tsx`,
        templateFile: "plop-templates/zsj/component.test.hbs",
        data: {
          // 传递的数据给模板文件
          name: compName,
        },
      }
    );

    actions.push({
      type: "modify",
      path: defaultCssPath,
      pattern: /(\/\/ new components)/g,
      template: '$1\n@import "../components/{{compName}}/index";',
    });
    actions.push({
      type: "modify",
      path: defaultIndexPath,
      pattern: /(\/\/ new components)/g,
      template:
        '$1\nexport { default as {{compName}} } from "./components/{{compName}}/index";',
    });
    return actions;
  },
};
