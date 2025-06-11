import { Link, NavLink } from 'react-router-dom';
import { PATHS } from '../../variables';
import { convertUrlToString } from '../../helpers';
import { EnumText } from '../../types/enums';
import { Text } from '../ui';
import cn from 'classnames';

export const Header = () => {
    return (
        <header className='sticky top-0 left-0 z-20 flex items-center w-full h-16 lg:h-20 border-b border-gray bg-white'>
            <div className='container'>
                <div className='flex items-center justify-between w-full'>
                    <Link
                        to={PATHS.HOME}
                        className='flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-75'
                    >
                        <span className='flex items-center justify-center size-9 md:size-10 rounded-md bg-blue'>
                            <i className='text-[22px] md:text-[24px] text-white devicon-react-original' />
                        </span>

                        <Text textType={EnumText.large} className='!w-fit font-medium'>
                            React Template
                        </Text>
                    </Link>

                    <ul className='hidden sm:flex gap-2 w-fit'>
                        {Object.values(PATHS.PAGES).map((path) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        cn(
                                            `flex items-center justify-center gap-2 w-full sm:w-fit h-8 font-media px-3 rounded-md transition-colors duration-300`,
                                            {
                                                'text-blue pointer-events-none': isActive,
                                                'hover:bg-gray': !isActive,
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
