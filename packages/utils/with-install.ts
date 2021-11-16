/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:59:04
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 20:00:33
 * @Description: 
 */
import type { App, Plugin } from 'vue' // 只导入类型 而不是导入值

// 类型必须导出 否则生成不了.d.ts
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}