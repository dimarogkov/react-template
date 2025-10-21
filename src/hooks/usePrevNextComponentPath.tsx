import { useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { getLinks } from '@utils';

export default function usePrevNextComponentPath() {
    const { pathname } = useLocation();
    const { links } = getLinks();

    const introductionLink = { href: PATHS.DOCUMENTATION, name: 'Introduction' };
    const linksArr = [introductionLink, ...Object.values(links)];

    const pathIndex = linksArr.findIndex(({ href }) => href === pathname);
    const prevPath = linksArr[pathIndex - 1] || linksArr[linksArr.length - 1];
    const nextPath = linksArr[pathIndex + 1] || linksArr[0];

    return [prevPath, nextPath];
}
