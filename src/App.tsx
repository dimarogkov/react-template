import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Breadcrumbs, Header } from './components/blocks';

export const App = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />

            <main className='relative w-full py-5'>
                <Outlet />
            </main>

            <Toaster position='bottom-right' reverseOrder={false} toastOptions={{ duration: 2000 }} />
        </>
    );
};
