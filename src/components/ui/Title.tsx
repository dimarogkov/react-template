import { HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '../../types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    titleType?: string;
    className?: string;
}

export const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, titleType = EnumTitle.h1, className = '', ...props }, ref) => (
        <h1
            ref={ref}
            {...props}
            className={cn(`w-full font-bold ${className}`, {
                'text-2xl md:text-3xl lg:text-4xl xl:text-5xl': titleType === EnumTitle.h1,
                'text-xl md:text-2xl lg:text-3xl xl:text-4xl': titleType === EnumTitle.h2,
                'text-xl md:text-2xl lg:text-3xl': titleType === EnumTitle.h3,
            })}
        >
            {children}
        </h1>
    )
);
