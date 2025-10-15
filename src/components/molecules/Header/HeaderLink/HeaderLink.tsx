import { NavLink, useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { convertUrlToString } from '@utils';
import cn from 'classnames';

type Props = {
    href: string;
};

export default function HeaderLink({ href }: Props) {
    const { pathname } = useLocation();

    return (
        <NavLink
            end
            to={href}
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
            {convertUrlToString(PATHS.DOCUMENTATION)}
        </NavLink>
    );
}
