import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../variables';
import { convertUrlToString } from '../../helpers';
import { Text } from '../ui';
import cn from 'classnames';

export const Header = () => {
    const { MAIN } = PATHS.PAGES;

    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-border bg-bg'>
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <Link
                        to={PATHS.HOME}
                        className='flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75'
                    >
                        <i className='text-[26px] md:text-[30px] text-title devicon-react-original' />

                        <Text size='large' className='!w-fit font-medium text-title select-none'>
                            React Template
                        </Text>
                    </Link>

                    <ul className='hidden sm:flex gap-2 w-fit'>
                        {Object.values(MAIN).map((path) => (
                            <li key={path}>
                                <NavLink
                                    end
                                    to={path}
                                    className={({ isActive }) =>
                                        cn(
                                            `flex items-center justify-center gap-2 w-full sm:w-fit h-8 font-media px-3 rounded-md transition-colors duration-300`,
                                            {
                                                'text-title pointer-events-none': isActive,
                                                'hover:bg-border': !isActive,
                                            }
                                        )
                                    }
                                >
                                    {convertUrlToString(path)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
};
