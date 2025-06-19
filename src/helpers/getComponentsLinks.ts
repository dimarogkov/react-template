import { PATHS } from '../variables';
import { convertUrlToString } from './convertUrlToString';

export const getComponentsLinks = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;

    return Object.values(COMPONENTS).map((path) => ({
        name: convertUrlToString(path),
        href: `${MAIN.COMPONENTS}${path}`,
    }));
};
