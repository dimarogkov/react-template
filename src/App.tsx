import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { BreadcrumbWrapper, Footer, Header, Sidebar } from '@components/organisms';

export const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [pathname]);

    return (
        <>
            <Header />
            <BreadcrumbWrapper />

            <main className="relative w-full">
                <Outlet context={{ Footer: <Footer />, Sidebar: <Sidebar /> }} />
            </main>

            <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
