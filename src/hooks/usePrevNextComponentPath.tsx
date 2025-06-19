import { useLocation } from 'react-router-dom';
import { PATHS } from '../variables';
import { getComponentsLinks } from '../helpers';

export const usePrevNextComponentPath = () => {
    const { pathname } = useLocation();
    const { MAIN } = PATHS.PAGES;
    const linksArr = getComponentsLinks();

    const mainLink = { href: MAIN.COMPONENTS, name: 'Components' };

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || mainLink;
    const nextPath = linksArr[pathIndex + 1] || mainLink;

    return { prevPath, nextPath };
};
