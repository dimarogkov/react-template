import { FC, ReactNode, RefAttributes, forwardRef } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { EnumBtn } from '../../types/enums';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    btnType?: EnumBtn;
    className?: string;
}

export const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, children, btnType = EnumBtn.default, className = '', ...props }, ref) => {
        const animation: HTMLMotionProps<'span'> = {
            whileHover: { opacity: 0.8 },
            whileTap: { scale: 0.95 },
        };

        const btnLinkClasses = {
            [EnumBtn.default as string]: 'bg-blue text-white',
            [EnumBtn.outline as string]: 'border-2 border-blue text-blue',
        };

        return (
            <Link ref={ref} to={href} target={target} {...props}>
                <motion.span
                    {...animation}
                    className={cn(
                        `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded ${className}`,
                        btnLinkClasses[btnType]
                    )}
                >
                    {children}
                </motion.span>
            </Link>
        );
    }
);
