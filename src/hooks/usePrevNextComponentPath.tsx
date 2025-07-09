import { useLocation } from 'react-router-dom';
import { PATHS } from '../variables';
import { getLinks } from '../helpers';

export const usePrevNextComponentPath = () => {
    const { pathname } = useLocation();
    const { MAIN } = PATHS.PAGES;
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const mainLink = { href: MAIN.DOCUMENTATION, name: 'Documentation' };

    const linksArr = [
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ];

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || mainLink;
    const nextPath = linksArr[pathIndex + 1] || mainLink;

    return { prevPath, nextPath };
};
