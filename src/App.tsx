import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Breadcrumb, Header } from './components/blocks';

export const App = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname]);

    return (
        <>
            <Header />
            <Breadcrumb />

            <main className='relative w-full py-7 md:py-10'>
                <Outlet />
            </main>

            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
