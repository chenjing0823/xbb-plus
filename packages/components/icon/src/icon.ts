/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:31:22
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 19:40:19
 * @Description: 这里主要放置的是组件的props， 及一些公共的方法
 */
import type { ExtractPropTypes } from "vue";
export const iconProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
}
export type IconProps = ExtractPropTypes<typeof iconProps>;