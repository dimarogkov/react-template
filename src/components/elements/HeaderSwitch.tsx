import { Link } from 'react-router-dom';
import { HEADER_SWITCH_ITEMS } from '../../variables';
import cn from 'classnames';

export const HeaderSwitch = () => {
    return (
        <div className='relative flex items-center h-9 gap-1 p-0.5 rounded-md border border-border'>
            {HEADER_SWITCH_ITEMS.map(({ link, icon, isActive }) => (
                <Link
                    key={icon}
                    to={link}
                    className={cn('group flex items-center justify-center size-[30px] rounded-md select-none', {
                        'bg-border pointer-events-none': isActive,
                    })}
                >
                    <i
                        className={cn(`text-[22px] ${icon}`, {
                            'transition-colors duration-300 group-hover:text-title': !isActive,
                        })}
                    />
                </Link>
            ))}
        </div>
    );
};
