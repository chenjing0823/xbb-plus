/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:11:40
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 15:27:35
 * @Description: 
 */
import { createApp } from "vue";
import App from "./app.vue";
// import XbbIcon from "@xbb-plus/components/icon";
// import '@xbb-plus/theme-chalk/src/index.scss'
import xbbPlus from "xbb-plus";
import 'xbb-plus/theme-chalk/index.css'
const app = createApp(App);

// app.use(XbbIcon);
app.use(xbbPlus)
app.mount("#app");
