import { useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { getLinks } from '@utils';

export const usePrevNextComponentPath = () => {
    const { pathname } = useLocation();
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const introductionLink = { href: PATHS.DOCUMENTATION, name: 'Introduction' };

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
