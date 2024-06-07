import { Outlet } from 'react-router-dom';

export const App = () => {
    return (
        <main className='relative w-full max-w-[1440px] px-[16px] sm:px-[20px] md:px-[24px] lg:px-[30px] xl:px-[40px] py-[24px] md:py-[32px] xl:py-[40px] m-auto'>
            <Outlet />
        </main>
    );
};
