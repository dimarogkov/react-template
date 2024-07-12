import { forwardRef, OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { FormNames } from '../../types/enums/FormNames';
import { FormValues } from '../../types/interfaces/FormValues';
import { LuChevronDown } from 'react-icons/lu';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    className?: string;
    registerName?: FormNames;
    register?: UseFormRegister<FormValues>;
}

export const Option: React.FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

export const Select: React.FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', registerName = FormNames.select, register = () => {}, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray transition-all duration-300 focus:border-black'
                {...register(registerName)}
            />

            <LuChevronDown className='absolute right-4 w-5 h-5 text-black' />
        </div>
    )
);
