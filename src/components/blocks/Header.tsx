import { Link, NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '../../variables';
import { convertUrlToString } from '../../helpers';
import { HeaderSearch, HeaderSwitch } from '../elements';
import { Text } from '../ui';
import { Github } from 'lucide-react';
import cn from 'classnames';

export const Header = () => {
    const { pathname } = useLocation();
    const { MAIN } = PATHS.PAGES;

    return (
        <header
            className={cn('sticky top-0 left-0 z-30 flex items-center w-full h-16 lg:h-20 border-b border-border', {
                'backdrop-blur-lg': pathname === PATHS.HOME,
                'bg-bg': pathname !== PATHS.HOME,
            })}
        >
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <Link
                        to={PATHS.HOME}
                        className='flex items-center gap-2 sm:gap-2.5 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center size-8 sm:size-9 rounded-md bg-title'>
                            <i className='text-[24px] md:text-[28px] text-bg devicon-react-original' />
                        </span>

                        <Text size='large' className='!w-fit font-medium text-title select-none'>
                            React Template
                        </Text>
                    </Link>

                    <div className='flex items-center gap-2'>
                        <ul className='hidden sm:flex w-fit'>
                            <li>
                                <NavLink
                                    end
                                    to={MAIN.DOCUMENTATION}
                                    className={({ isActive }) =>
                                        cn(
                                            `flex items-center justify-center gap-2 w-full sm:w-fit h-9 font-media px-3 rounded-md transition-colors duration-300`,
                                            {
                                                'text-title pointer-events-none': isActive,
                                                'hover:bg-border': !isActive,
                                                'text-title': pathname === PATHS.HOME,
                                            }
                                        )
                                    }
                                >
                                    {convertUrlToString(MAIN.DOCUMENTATION)}
                                </NavLink>
                            </li>
                        </ul>

                        <HeaderSearch />
                        <HeaderSwitch />

                        <Link
                            to='https://github.com/dimarogkov/react-template'
                            target='_blank'
                            className='flex items-center justify-center size-9 rounded-md transition-colors duration-300 hover:bg-border'
                        >
                            <Github className='size-5 text-text' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
