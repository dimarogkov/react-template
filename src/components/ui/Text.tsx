import { HTMLAttributes, RefAttributes, forwardRef } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    className?: string;
}

export const Text: React.FC<Props> = forwardRef<HTMLParagraphElement, Props>(({ className = '', ...props }, ref) => (
    <p ref={ref} {...props} className={`w-full text-base ${className}`} />
));
