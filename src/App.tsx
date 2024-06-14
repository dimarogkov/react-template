import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative w-full max-w-[1440px] p-[24px] md:p-[40px] m-auto'>
            <Outlet />
        </main>
    );
};
