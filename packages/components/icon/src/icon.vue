<!--
 * @Author: jing.chen
 * @Date: 2021-10-28 19:31:41
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-10-28 20:20:47
 * @Description: 
-->
<template>
  <i class="xbb-icon" :style="style">
    <slot></slot>
  </i>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { iconProps } from './icon'
export default defineComponent({
  name: 'XbbIcon',
  props: iconProps,
  setup(props) {
    const style = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      const style = {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { 'color': props.color } : {}),
      }
      console.log('style', style)
      return style
    })
    return { style }
  }

})
</script>