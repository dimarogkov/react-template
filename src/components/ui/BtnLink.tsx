import { ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface Props extends RefAttributes<HTMLAnchorElement> {
    href: string;
    children?: ReactNode;
    className?: string;
}

export const BtnLink: React.FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, children, className = '', ...props }, ref) => (
        <Link
            ref={ref}
            to={href}
            {...props}
            className={`flex items-center justify-center w-full sm:w-fit sm:min-w-[120px] lg:min-w-[140px] h-[40px] lg:h-[44px] font-media px-[16px] rounded-[4px] text-[#fff] bg-black transition-opacity duration-300 hover:opacity-80 ${className}`}
        >
            {children}
        </Link>
    )
);
