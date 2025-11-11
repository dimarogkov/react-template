import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { PATHS } from '@app/routes';
import { BreadcrumbWrapper, Header, Sidebar } from '@components/organisms';
import cn from 'classnames';

export default function App() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <>
            <Header />
            <BreadcrumbWrapper />

            <main className={cn('relative w-full', { 'py-5 md:py-10': pathname !== PATHS.HOME })}>
                <Outlet context={{ Sidebar: <Sidebar /> }} />
            </main>

            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
}
