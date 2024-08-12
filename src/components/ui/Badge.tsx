import { HTMLAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLSpanElement> {
    className?: string;
}

export const Badge: React.FC<Props> = forwardRef<HTMLSpanElement, Props>(({ className = '', ...props }, ref) => (
    <span ref={ref} {...props} className={`text-base text-black px-2 py-1 rounded bg-gray ${className}`} />
));
