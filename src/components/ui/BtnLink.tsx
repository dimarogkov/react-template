import { ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { EnumBtnTypes } from '../../types/enums/BtnTypes';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement> {
    href: string;
    children?: ReactNode;
    btnType?: string;
    className?: string;
}

export const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, children, btnType = EnumBtnTypes.default, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            to={href}
            {...props}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-blue': btnType === EnumBtnTypes.default,
                    'bg-black/25': btnType === EnumBtnTypes.gray,
                }
            )}
        >
            {children}
        </Link>
    )
);
