export const SIMPLE_LINK_CODE = `import { forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    className?: string;
}

export const SimpleLink = forwardRef<HTMLAnchorElement, Props>(({ href, target, className = '', ...props }, ref) => {
    return (
        <Link
            ref={ref}
            {...props}
            to={href}
            target={target}
            className={cn(
                'text-title relative w-auto font-medium underline transition-opacity duration-300 hover:opacity-75',
                className
            )}
        />
    );
});`;
