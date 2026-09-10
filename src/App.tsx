import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PATHS } from '@app/routes';
import { BreadcrumbWrapper, Footer, Header, Sidebar } from '@components/organisms';
import cn from 'classnames';

export const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <>
            <Header />
            <BreadcrumbWrapper />

            <main className={cn('relative w-full', { 'pt-5 md:pt-10': pathname !== PATHS.HOME })}>
                <Outlet context={{ Footer: <Footer />, Sidebar: <Sidebar /> }} />
            </main>

            <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
