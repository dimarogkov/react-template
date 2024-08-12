import { Outlet } from 'react-router-dom';
import { Header } from './components/elements/Header';

export const App = () => {
    return (
        <>
            <Header />
            <main className='relative w-full max-w-screen-2xl p-4 sm:p-5 m-auto'>
                <Outlet />
            </main>
        </>
    );
};
