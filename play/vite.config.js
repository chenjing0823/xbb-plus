/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:10:29
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-11-15 15:26:51
 * @Description: 
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  publicDir: '/'
});
