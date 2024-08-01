import { forwardRef, InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../types/interfaces/FormValues';
import { EnumFormNames } from '../../types/enums/FormNames';
import { LuCircle } from 'react-icons/lu';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    isChecked: string;
    value?: string;
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

export const Radio: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    (
        {
            isChecked,
            value = '',
            className = '',
            registerName = EnumFormNames.radioType,
            register = () => {},
            ...props
        },
        ref
    ) => (
        <div className={`relative w-5 min-w-5 h-5 ${className}`}>
            <input
                ref={ref}
                {...props}
                type='radio'
                className='absolute top-5 left-0 w-full h-full opacity-0 cursor-pointer'
                {...register(registerName)}
                value={value}
            />

            <span
                className={cn('flex items-center justify-center w-full h-full rounded-full border', {
                    'border-gray': isChecked !== value,
                    'border-blue': isChecked === value,
                })}
            >
                <LuCircle
                    className={cn('w-3 h-3 rounded-full text-blue bg-blue', {
                        'opacity-0 invisible': isChecked !== value,
                        'opacity-1 visible': isChecked === value,
                    })}
                />
            </span>
        </div>
    )
);
