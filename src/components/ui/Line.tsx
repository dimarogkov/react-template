import { forwardRef, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
    className?: string;
}

export const Line: React.FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => (
    <div ref={ref} {...props} className={`relative w-full border-t border-gray my-5 ${className}`}></div>
));
