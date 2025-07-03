import { PATHS } from '../variables';
import { convertUrlToString } from './convertUrlToString';

export const getLinks = () => {
    const { MAIN, COMPONENTS, STORE } = PATHS.PAGES;

    const generateLinks = (paths: string[], base: string) => {
        return paths.map((path) => ({
            name: convertUrlToString(path),
            href: `${base}${path}`,
        }));
    };

    const componentsLinks = generateLinks(Object.values(COMPONENTS), MAIN.COMPONENTS);
    const storeLinks = generateLinks(Object.values(STORE), MAIN.STORE);

    return { componentsLinks, storeLinks };
};
