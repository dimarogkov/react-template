import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative w-full max-w-screen-2xl p-6 md:p-5 m-auto'>
            <Outlet />
        </main>
    );
};
