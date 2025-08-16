import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PATHS } from './variables';
import { Breadcrumb, Header, Sidebar } from './components/blocks';
import cn from 'classnames';

export const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <>
            <Header />
            <Breadcrumb />

            <main className={cn('relative w-full', { 'py-7 md:py-10': pathname !== PATHS.HOME })}>
                <Outlet context={{ Sidebar: <Sidebar /> }} />
            </main>

            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
