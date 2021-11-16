/*
 * @Author: jing.chen
 * @Date: 2021-10-28 19:41:31
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 20:39:12
 * @Description: 入口
 */
import Icon from "./src/icon.vue";
import { withInstall } from "@xbb-plus/utils/with-install";
// Icon.install = function(app: App) {
//   app.component(Icon.name, Icon)
// }

const XbbIcon = withInstall(Icon);
export {
  XbbIcon
}
export default XbbIcon;