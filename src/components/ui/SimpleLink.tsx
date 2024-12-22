import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Link } from 'react-router-dom';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    className?: string;
}

export const SimpleLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ href, className = '', ...props }, ref) => (
    <Link ref={ref} {...props} to={href} className={`relative w-auto text-blue underline ${className}`} />
));