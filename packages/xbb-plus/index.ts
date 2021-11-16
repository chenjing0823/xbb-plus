/*
 * @Author: jing.chen
 * @Date: 2021-11-01 19:20:34
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 14:03:40
 * @Description: 
 */
import { XbbIcon } from "@xbb-plus/components";
import type { App } from "vue"; // ts中的优化只获取类型
// ....

const components = [XbbIcon];
const install = (app: App) => {
  // 每个组件在编写的时候都提供了install方法

  // 有的是组建 有的可能是指令 xxx.install = ()=>{app.directive()}
  components.forEach((component) => app.use(component));
};
export default {
  install,
};
export * from "@xbb-plus/components";

//app.use(XbbPlus)

