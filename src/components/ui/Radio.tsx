import { FC, forwardRef, InputHTMLAttributes, RefAttributes } from 'react';
import { Circle } from 'lucide-react';
import { Text } from './Text';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    isChecked: string;
    label?: string;
    value?: string;
}

export const Radio: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ isChecked, label, value = '', ...props }, ref) => {
        return (
            <div className='flex items-center gap-2 cursor-pointer'>
                <div className='relative w-5 min-w-5 h-5'>
                    <input
                        ref={ref}
                        {...props}
                        type='radio'
                        className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                        value={value}
                    />

                    <span
                        className={cn(
                            'flex items-center justify-center w-full h-full bg-transparent rounded-full border',
                            {
                                'border-gray': isChecked !== value,
                                'border-blue': isChecked === value,
                            }
                        )}
                    >
                        <Circle
                            className={cn('w-3 h-3 rounded-full text-blue bg-blue', {
                                'opacity-0 invisible': isChecked !== value,
                                'opacity-1 visible': isChecked === value,
                            })}
                        />
                    </span>
                </div>

                {label && <Text>{label}</Text>}
            </div>
        );
    }
);
