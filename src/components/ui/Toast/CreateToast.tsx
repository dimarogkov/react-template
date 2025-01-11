import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { useToast } from '../../../context';
import { EnumToast } from '../../../types/enums';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    type?: string;
    title: string;
    text?: string;
    className?: string;
}

export const CreateToast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ type = EnumToast.default, title, text = '', className = '', ...props }, ref) => {
        const createToast = useToast();

        const handleClick = () => {
            const toast = {
                id: crypto.randomUUID(),
                type,
                title,
                text,
                isClosing: false,
            };

            createToast(toast);
        };

        return <div ref={ref} {...props} onClick={handleClick} className={`relative cursor-pointer ${className}`} />;
    }
);
