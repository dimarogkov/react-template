import { PATHS } from '../variables';
import { convertUrlToString } from './convertUrlToString';

export const getLinks = () => {
    const { MAIN, COMPONENTS, STORE } = PATHS.PAGES;

    const generateLinks = (paths: string[]) => {
        return paths.map((path) => ({
            name: convertUrlToString(path),
            href: `${MAIN.DOCUMENTATION}${path}`,
        }));
    };

    const componentsLinks = generateLinks(Object.values(COMPONENTS));
    const storeLinks = generateLinks(Object.values(STORE));

    return { componentsLinks, storeLinks };
};
