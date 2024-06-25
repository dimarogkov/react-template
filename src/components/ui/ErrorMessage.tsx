import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
    className?: string;
}

export const ErrorMessage: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ className = '', ...props }, ref) => (
        <p ref={ref} {...props} className={`w-full font-medium text-[14px] text-rose-600 ${className}`} />
    )
);
