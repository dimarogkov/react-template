import { Link, NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { convertUrlToString } from '@utils';
import { HeaderLogo, HeaderSearch, HeaderSwitch } from '@components/molecules';
import { Github } from 'lucide-react';
import cn from 'classnames';

export default function Header() {
    const { pathname } = useLocation();

    const isHomePage = pathname === PATHS.HOME;

    return (
        <header
            className={cn('sticky top-0 left-0 z-30 flex items-center w-full h-16 lg:h-20 border-b border-border', {
                'backdrop-blur-lg': isHomePage,
                'bg-bg': !isHomePage,
            })}
        >
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <HeaderLogo />

                    <div className='flex items-center gap-2'>
                        <ul className='hidden sm:flex w-fit'>
                            <li>
                                <NavLink
                                    end
                                    to={PATHS.DOCUMENTATION}
                                    className={({ isActive }) =>
                                        cn(
                                            `flex items-center justify-center gap-2 w-full sm:w-fit h-9 font-media px-3 rounded-md transition-colors duration-300`,
                                            {
                                                'text-title pointer-events-none': isActive,
                                                'hover:bg-border': !isActive,
                                                'text-title': isHomePage,
                                            }
                                        )
                                    }
                                >
                                    {convertUrlToString(PATHS.DOCUMENTATION)}
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
}
