import { FC } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cn from 'classnames';

type Props = {
    link: {
        name: string;
        href: string;
    };
    isActive: boolean;
};

export const SidebarLink: FC<Props> = ({ link, isActive }) => {
    const { name, href } = link;

    return (
        <Link
            to={href}
            className={cn('relative flex w-fit font-media transition-all duration-300 hover:text-title hover:pl-0.5', {
                'text-title pointer-events-none': isActive,
                'text-text/80': !isActive,
            })}
        >
            <span>{name}</span>

            {isActive && (
                <motion.div
                    layoutId='line'
                    className='absolute -left-4 w-[1px] h-full bg-title'
                    transition={{ type: 'spring', stiffness: 300, damping: 35 }}
                />
            )}
        </Link>
    );
};
