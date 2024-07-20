import { InputHTMLAttributes, forwardRef } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../../types/interfaces/FormValues';
import { EnumFormNames } from '../../types/enums/FormNames';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

export const Input: React.FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ className = '', registerName = EnumFormNames.username, register = () => {}, ...props }, ref) => (
        <input
            ref={ref}
            {...props}
            className={`w-full h-10 px-4 rounded border border-gray outline-none transition-all duration-300 focus:border-black ${className}`}
            {...register(registerName)}
        />
    )
);
