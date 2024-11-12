import { FC, forwardRef, OptionHTMLAttributes, RefAttributes, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>, RefAttributes<HTMLOptionElement> {}

const SelectWrapper: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', ...props }, ref) => (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded outline-none appearance-none border border-gray bg-white transition-all duration-300 focus:border-black'
            />

            <ChevronDown className='absolute right-4 w-5 h-5' />
        </div>
    )
);

const SelectOption: FC<OptionProps> = forwardRef<HTMLOptionElement, OptionProps>(({ ...props }, ref) => (
    <option ref={ref} {...props} />
));

export const Select = Object.assign(SelectWrapper, {
    Option: SelectOption,
});
