import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    className?: string;
};

const BadgeWrapper: FC<Props> = ({ children, className = '' }) => {
    return <div className={`relative flex gap-2 ${className}`}>{children}</div>;
};

const BadgeItem: FC<Props> = ({ children, className = '' }) => {
    return <span className={`text-base px-3 py-1.5 rounded bg-gray ${className}`}>{children}</span>;
};

export const Badge = Object.assign(BadgeWrapper, {
    Item: BadgeItem,
});
