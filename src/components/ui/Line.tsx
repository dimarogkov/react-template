import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

export const Line: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
    return <div ref={ref} {...props} className={`relative w-full border-t border-border my-5 ${className}`} />;
});
