import { HTMLAttributes, ReactNode, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Title: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h1
            ref={ref}
            {...props}
            className={`w-full text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold ${className}`}
        >
            {children}
        </h1>
    )
);
