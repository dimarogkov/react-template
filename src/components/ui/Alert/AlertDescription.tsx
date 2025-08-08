import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    titleClasses?: string;
    descriptionClasses?: string;
    className?: string;
}

export const AlertDescription: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ descriptionClasses, className = '', ...props }, ref) => {
        return (
            <Text ref={ref} {...props} className={`relative !text-sm ${descriptionClasses} ${className}`}>
                {props.children}
            </Text>
        );
    }
);
