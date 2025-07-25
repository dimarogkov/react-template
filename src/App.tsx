import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PATHS } from './variables';
import { getLinks } from './helpers';
import { Breadcrumb, Header, Sidebar } from './components/blocks';
import { ScrollTopBtn } from './components/elements';
import cn from 'classnames';

export const App = () => {
    const { pathname } = useLocation();
    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const linksArr = [
        ...Object.values(componentsLinks),
        ...Object.values(dataFetchingLinks),
        ...Object.values(formValidationLinks),
        ...Object.values(storeLinks),
    ].map(({ href }) => href);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <>
            <Header />
            <Breadcrumb />
            {linksArr.includes(pathname) && <Sidebar />}
            <ScrollTopBtn />

            <main className={cn('relative w-full', { 'py-7 md:py-10': pathname !== PATHS.HOME })}>
                <Outlet />
            </main>

            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
