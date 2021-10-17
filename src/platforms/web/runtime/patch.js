/*
 * @Author: qianlong github:https://github.com/LINGyue-dot
 * @Date: 2021-10-16 15:06:03
 * @LastEditors: qianlong github:https://github.com/LINGyue-dot
 * @LastEditTime: 2021-10-17 09:58:46
 * @Description:
 */
/* @flow */

import * as nodeOps from "web/runtime/node-ops";
import { createPatchFunction } from "core/vdom/patch";
import baseModules from "core/vdom/modules/index";
import platformModules from "web/runtime/modules/index";

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules);

// nodeOps 封装了一系列的 dom 操作方法
// modules 定义了一些模块的钩子函数实现
export const patch: Function = createPatchFunction({ nodeOps, modules });
