import { HTMLAttributes, ReactNode, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
    children?: ReactNode;
    className?: string;
}

export const Subtitle: React.FC<Props> = forwardRef<HTMLHeadingElement, Props>(
    ({ children, className = '', ...props }, ref) => (
        <h3
            ref={ref}
            {...props}
            className={`w-full text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold ${className}`}
        >
            {children}
        </h3>
    )
);
