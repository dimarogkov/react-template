import { FC, HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';
import { EnumTitle } from '../../types/enums';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    titleType?: string;
    className?: string;
}

export const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, titleType = EnumTitle.h1, className = '', ...props }, ref) => (
        <>
            {titleType === EnumTitle.h1 && (
                <h1
                    ref={ref}
                    {...props}
                    className={`w-full font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl ${className}`}
                >
                    {children}
                </h1>
            )}

            {titleType === EnumTitle.h2 && (
                <h2
                    ref={ref}
                    {...props}
                    className={`w-full font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl ${className}`}
                >
                    {children}
                </h2>
            )}

            {titleType === EnumTitle.h3 && (
                <h3 ref={ref} {...props} className={`w-full font-bold text-xl md:text-2xl lg:text-3xl ${className}`}>
                    {children}
                </h3>
            )}
        </>
    )
);
