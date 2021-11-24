/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-21 19:46:27
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-11-25 00:57:17
 * @Description:
 */

// 创建 p 节点

import Vue from "../../src/platforms/web/entry-runtime-with-compiler";

const app = new Vue({
  template: `<div>{{allName}}</div>`,
  data(){
    return {
      fullName:'qian',
      lastName:'long'
    }
  },
  computed:{
    allName(){
      return this.fullName+this.lastName
    }
  }
})
  // beforeCreate(){
  //   console.log('parent beforeCreated')
  // },
  // created(){
  //   console.log('parent created')
  // },
  // mounted(){
  //   console.log('parent mounted')
  // }

// Vue.component("hello-world", {
//   template: "<p><hello-ql /></p>",
//   // template:"<div>hello q</div>"
//   // beforeCreate(){
//   //   console.log('child beforeCreated')
//   // },
//   // created(){
//   //   console.log('child created')
//   // },
//   // mounted(){
//   //   console.log('child mounted')
//   // }
// });
// Vue.component("hello-ql",{
//   template:"<div><div><span>hello ql</span></div></div>",
// })

app.$mount("#app");
