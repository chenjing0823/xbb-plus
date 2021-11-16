import { XbbIcon } from 'xbb-plus/es/components';
export * from 'xbb-plus/es/components';

const components = [XbbIcon];
const install = (app) => {
    components.forEach((component) => app.use(component));
};
var index = {
    install,
};

export { index as default };
