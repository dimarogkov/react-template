import { Link } from 'react-router-dom';
import { EnumTitle } from '../../types/enums';
import { PATHS } from '../../variables/paths';

import { Title } from '../ui';
import { Braces } from 'lucide-react';

export const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='flex items-center justify-between w-full max-w-screen-2xl px-4 sm:px-5 m-auto'>
                <Title titleType={EnumTitle.h3} className='flex'>
                    <Link
                        to={PATHS.HOME}
                        className='flex items-center gap-4 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center w-10 h-10 rounded-full bg-gray'>
                            <Braces className='w-5 h-5 text-black' />
                        </span>

                        <span>React Template</span>
                    </Link>
                </Title>
            </div>
        </header>
    );
};
