/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-21 19:46:27
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-21 20:42:42
 * @Description:
 */

// 创建 p 节点

import Vue from "../../src/platforms/web/entry-runtime-with-compiler";

const app = new Vue({
  template: `<div>
  <hello-world></hello-world>
  </div>`,
});
Vue.component("hello-world", {
  template: "<div>hello world</div>",
});

app.$mount("#app");
