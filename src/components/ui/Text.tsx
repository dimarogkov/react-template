import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import cn from 'classnames';
import { EnumText } from '../../types/enums';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    textType?: EnumText;
    className?: string;
}

export const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ textType = EnumText.default, className = '', ...props }, ref) => (
        <p
            ref={ref}
            {...props}
            className={cn(`w-full text-base ${className}`, { 'md:text-lg': textType === EnumText.large })}
        />
    )
);
