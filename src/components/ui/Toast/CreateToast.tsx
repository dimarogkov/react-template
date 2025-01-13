import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { useToast } from '../../../context';
import { EnumToast } from '../../../types/enums';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    type?: EnumToast;
    title: string;
    text?: string;
    duration?: number;
    className?: string;
}

export const CreateToast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ type = EnumToast.info, title, text = '', duration = 3000, className = '', ...props }, ref) => {
        const { createToast } = useToast();

        const handleClick = () => {
            const toast = { id: crypto.randomUUID(), type, title, text, timeoutId: null };
            createToast(toast, duration);
        };

        return <div ref={ref} {...props} onClick={handleClick} className={`relative cursor-pointer ${className}`} />;
    }
);
