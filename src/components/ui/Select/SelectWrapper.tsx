import { FC, forwardRef, RefAttributes, SelectHTMLAttributes } from 'react';
import { ChevronDown } from 'lucide-react';

interface Props extends SelectHTMLAttributes<HTMLSelectElement>, RefAttributes<HTMLSelectElement> {
    className?: string;
}

export const SelectWrapper: FC<Props> = forwardRef<HTMLSelectElement, Props>(({ className = '', ...props }, ref) => {
    return (
        <div className={`relative flex items-center w-full h-10 ${className}`}>
            <select
                ref={ref}
                {...props}
                className='w-full h-full px-4 pr-12 rounded-md outline-none appearance-none border border-border bg-transparent transition-all duration-300 focus:border-text'
            />

            <ChevronDown className='absolute right-4 size-5' />
        </div>
    );
});
