import { FC, ReactNode, RefAttributes, forwardRef } from 'react';
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
        const btnLinkClasses = {
            [EnumBtn.default as string]: 'bg-blue text-white',
            [EnumBtn.outline as string]: 'border-2 border-blue text-blue',
        };

        return (
            <Link
                ref={ref}
                to={href}
                target={target}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-2 w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded transition-opacity duration-300 hover:opacity-80 ${className}`,
                    btnLinkClasses[btnType]
                )}
            >
                {children}
            </Link>
        );
    }
);
