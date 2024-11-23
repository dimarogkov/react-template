import {
    AnchorHTMLAttributes,
    Children,
    cloneElement,
    FC,
    forwardRef,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
} from 'react';
import { Link } from 'react-router-dom';
import { EnumAvatar } from '../../../types/enums';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    type?: EnumAvatar;
    className?: string;
    children?: ReactNode;
}

export const AvatarLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, type = EnumAvatar.circle, children, className = '', ...props }, ref) => {
        const isTypeCircle = type === EnumAvatar.circle;
        const isTypeSquare = type === EnumAvatar.square;

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
