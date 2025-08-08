import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { Text } from '../Text';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
    titleClasses?: string;
    descriptionClasses?: string;
    className?: string;
}

export const AlertTitle: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
    ({ titleClasses, className = '', ...props }, ref) => {
        return (
            <Text
                ref={ref}
                {...props}
                className={`relative font-semibold mb-0.5 last:mb-0 ${titleClasses} ${className}`}
            >
                {props.children}
            </Text>
        );
    }
);
