import { ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    className?: string;
}

const BtnLink = forwardRef<HTMLAnchorElement, Props>(({ href, target, children, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            to={href}
            target={target}
            {...props}
            className={`flex items-center justify-center gap-1.5 w-full h-full px-4 ${className}`}
        >
            {children}
        </Link>
    );
});

export default BtnLink;
