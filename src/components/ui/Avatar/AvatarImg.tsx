import { FC, forwardRef, ImgHTMLAttributes, RefAttributes } from 'react';
import { EnumAvatar } from '../../../types/enums';
import cn from 'classnames';

interface Props extends ImgHTMLAttributes<HTMLImageElement>, RefAttributes<HTMLImageElement> {
    type?: EnumAvatar;
    className?: string;
}

export const AvatarImg: FC<Props> = forwardRef<HTMLImageElement, Props>(
    ({ type = EnumAvatar.circle, className = '', ...props }, ref) => {
        const isTypeCircle = type === EnumAvatar.circle;
        const isTypeSquare = type === EnumAvatar.square;

        return (
            <img
                ref={ref}
                {...props}
                alt={props.alt}
                className={cn(`absolute top-0 left-0 rounded-full object-cover object-center ${className}`, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                })}
            />
        );
    }
);
