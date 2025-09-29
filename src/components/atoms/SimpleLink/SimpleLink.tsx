import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    className?: string;
}

const SimpleLink = forwardRef<HTMLAnchorElement, Props>(({ href, target, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            {...props}
            to={href}
            target={target}
            className={`relative w-auto font-medium text-title underline transition-opacity duration-300 hover:opacity-75 ${className}`}
        />
    );
});

export default SimpleLink;
