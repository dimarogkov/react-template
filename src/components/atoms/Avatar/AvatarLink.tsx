import {
    AnchorHTMLAttributes,
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    type?: 'circle' | 'square';
    className?: string;
    children?: ReactNode;
}

const AvatarLink = forwardRef<HTMLAnchorElement, Props>(
    ({ href, type = 'circle', children, className = '', ...props }, ref) => {
        const isTypeCircle = type === 'circle';
        const isTypeSquare = type === 'square';

        return (
            <Link
                ref={ref}
                {...props}
                to={href}
                className={cn(`relative block w-full h-full overflow-hidden ${className}`, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                })}
            >
                {Children.map(children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { type });
                    }

                    return child;
                })}
            </Link>
        );
    }
);

export default AvatarLink;
