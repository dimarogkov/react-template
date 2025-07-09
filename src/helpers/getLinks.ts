import { PATHS } from '../variables';
import { convertUrlToString } from './convertUrlToString';

export const getLinks = () => {
    const { MAIN, COMPONENTS, DATA, FORM_VALIDATION, STORE } = PATHS.PAGES;

    const generateLinks = (paths: string[]) => {
        return paths.map((path) => ({
            name: convertUrlToString(path),
            href: `${MAIN.DOCUMENTATION}${path}`,
        }));
    };

    const componentsLinks = generateLinks(Object.values(COMPONENTS));
    const dataLinks = generateLinks(Object.values(DATA));
    const formValidationLinks = generateLinks(Object.values(FORM_VALIDATION));
    const storeLinks = generateLinks(Object.values(STORE));

    return { componentsLinks, dataLinks, formValidationLinks, storeLinks };
};
