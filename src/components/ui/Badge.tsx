import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface PropsWrapper extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    className?: string;
}

interface PropsItem extends HTMLAttributes<HTMLSpanElement>, RefAttributes<HTMLSpanElement> {
    className?: string;
}

const BadgeWrapper: FC<PropsWrapper> = forwardRef<HTMLDivElement, PropsWrapper>(({ className = '', ...props }, ref) => (
    <div ref={ref} {...props} className={`relative flex gap-2 ${className}`} />
));

const BadgeItem: FC<PropsItem> = forwardRef<HTMLSpanElement, PropsItem>(({ className = '', ...props }, ref) => (
    <span ref={ref} {...props} className={`text-base px-3 py-1.5 rounded bg-gray ${className}`} />
));

export const Badge = Object.assign(BadgeWrapper, {
    Item: BadgeItem,
});
