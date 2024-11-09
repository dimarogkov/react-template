import { FC, forwardRef, OptionHTMLAttributes, RefAttributes, SelectHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { EnumFormNames } from '../../types/enums';
import { IFormValues } from '../../types/interfaces/FormValues';
import { ChevronDown } from 'lucide-react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
    registerName?: EnumFormNames;
    register?: UseFormRegister<IFormValues>;
}

const SelectOption: FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

const SelectWrapper: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', registerName = EnumFormNames.select, register = () => {}, ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray bg-white transition-all duration-300 focus:border-black'
                {...register(registerName)}
            />

            <ChevronDown className='absolute right-4 w-5 h-5' />
        </div>
    )
);

export const Select = Object.assign(SelectWrapper, {
    Option: SelectOption,
});
