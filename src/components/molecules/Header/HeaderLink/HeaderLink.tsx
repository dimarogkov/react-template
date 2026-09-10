import { NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { convertUrlToString } from '@utils';
import cn from 'classnames';

type Props = {
    href: string;
};

export const HeaderLink = ({ href }: Props) => {
    const { pathname } = useLocation();

    return (
        <NavLink
            end
            to={href}
            className={({ isActive }) =>
                cn(
                    `flex h-9 w-full items-center justify-center gap-2 rounded-md px-3 font-medium transition-colors duration-300 sm:w-fit`,
                    {
                        'text-title pointer-events-none': isActive,
                        'hover:bg-border': !isActive,
                        'text-title': pathname === PATHS.HOME
                    }
                )
            }
        >
            {convertUrlToString(PATHS.DOCUMENTATION)}
        </NavLink>
    );
};
