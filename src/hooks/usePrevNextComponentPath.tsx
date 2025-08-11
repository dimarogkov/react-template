import { useLocation } from 'react-router-dom';
import { PATHS } from '../variables';
import { getLinks } from '../helpers';

export const usePrevNextComponentPath = () => {
    const { pathname } = useLocation();
    const { MAIN } = PATHS.PAGES;
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const introductionLink = { href: MAIN.DOCUMENTATION, name: 'Introduction' };

    const linksArr = [
        introductionLink,
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ];

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || linksArr[linksArr.length - 1];
    const nextPath = linksArr[pathIndex + 1] || linksArr[0];

    return [prevPath, nextPath];
};
