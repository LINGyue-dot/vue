/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-16 15:06:03
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-21 20:58:30
 * @Description:
 */
const babelPresetFlowVue = {
  plugins: [
    require("@babel/plugin-proposal-class-properties"),
    // require('@babel/plugin-syntax-flow'), // not needed, included in transform-flow-strip-types
    require("@babel/plugin-transform-flow-strip-types"),
  ],
};

module.exports = {
  presets: [
    require("@babel/preset-env"),
    // require("babel-preset-flow-vue"),
    // require("babel-preset-flow"),
    babelPresetFlowVue,
  ],
  plugins: [
    require("babel-plugin-transform-vue-jsx"),
    require("@babel/plugin-syntax-dynamic-import"),
  ],
  ignore: ["dist/*.js", "packages/**/*.js"],
};
