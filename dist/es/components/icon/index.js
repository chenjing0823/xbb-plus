import { defineComponent, computed, openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';
import { withInstall } from 'xbb-plus/es/utils/with-install';

const iconProps = {
    size: {
        type: Number,
    },
    color: {
        type: String,
    },
};

var script = defineComponent({
    name: 'XbbIcon',
    props: iconProps,
    setup(props) {
        const style = computed(() => {
            if (!props.size && !props.color) {
                return {};
            }
            const style = Object.assign(Object.assign({}, (props.size ? { 'font-size': props.size + 'px' } : {})), (props.color ? { 'color': props.color } : {}));
            console.log('style', style);
            return style;
        });
        return { style };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("i", {
    class: "xbb-icon",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4 /* STYLE */))
}

script.render = render;
script.__file = "packages/components/icon/src/icon.vue";

const XbbIcon = withInstall(script);

export { XbbIcon, XbbIcon as default };
