// 让rollup识别typescript
import typescript from "rollup-plugin-typescript2";
import image from "@rollup/plugin-image";
// import { babel } from "@rollup/plugin-babel";
// import "babel-plugin-import";
// 帮助 rollup 查找外部模块
import { nodeResolve } from "@rollup/plugin-node-resolve";
// 解析scss
import postcss from "rollup-plugin-postcss";
import commonjs from "rollup-plugin-commonjs";
// 支持scss @import
import postcssImport from "postcss-import";
// 处理 apply 以及内置 mixin
// import tailwindcss from "tailwindcss";
const path = require("path");

const file = (type) => `dist/index.${type}.js`;

const overrides = {
  compilerOptions: { declaration: true },
};

export { file };
const config = {
  input: "src/index.tsx",
  output: [
    {
      file: file("esm"),
      format: "es",
    },
    {
      // 代表全局组件库的变量
      name: "stonewise-ui",
      file: file("umd"),
      format: "umd",
      // 对应external
      globals: {
        lodash: "lodash",
        react: "React",
        antd: "antd",
      },
    },
  ],
  // 执行顺序从上到下
  plugins: [
    nodeResolve(),
    commonjs({
      include: ["node_modules/**", "node_modules/**/*"],
    }),
    // babel({
    //   babelHelpers: "bundled",
    //   plugins: [
    //     [
    //       "import",
    //       { libraryName: "antd", libraryDirectory: "es", style: "css" },
    //     ],
    //   ],
    // }),
    image(),
    postcss({
      extensions: [".scss", ".css"],
      extract: true,
      plugins: [postcssImport()],
    }),
    typescript({ tsconfigOverride: overrides }),
    // 处理import classNames from "classnames";
    // 'default' is not exported by node_modules/classnames/index.js
  ],
  external: ["lodash", "antd", "react"],
};

export default config;
