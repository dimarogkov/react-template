import { ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { EnumBtn } from '../../types/enums/Btn';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement> {
    href: string;
    children?: ReactNode;
    btnType?: string;
    className?: string;
}

export const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, children, btnType = EnumBtn.default, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            to={href}
            {...props}
            className={cn(
                `flex items-center justify-center w-full sm:w-fit sm:min-w-32 lg:min-w-36 h-10 lg:h-11 font-media px-4 rounded text-white transition-opacity duration-300 hover:opacity-80 ${className}`,
                {
                    'bg-blue': btnType === EnumBtn.default,
                    'border-2 border-blue text-blue': btnType === EnumBtn.outline,
                    'bg-black/25': btnType === EnumBtn.gray,
                }
            )}
        >
            {children}
        </Link>
    )
);
