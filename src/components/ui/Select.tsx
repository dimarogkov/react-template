import { forwardRef, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EnumFormNames } from '../../types/enums/FormNames';
import { IFormValues } from '../../types/interfaces/FormValues';
import { ChevronDown } from 'lucide-react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

export const Option: React.FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

export const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', registerName = EnumFormNames.select, register = () => {}, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray transition-all duration-300 focus:border-black'
                {...register(registerName)}
            />

            <ChevronDown className='absolute right-4 w-5 h-5 text-black' />
        </div>
    )
);
