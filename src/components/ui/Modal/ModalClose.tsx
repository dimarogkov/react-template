import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import { X } from 'lucide-react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {}

export const ModalClose: FC<Props> = forwardRef<HTMLButtonElement, Props>(({ ...props }, ref) => {
    return (
        <button
            ref={ref}
            {...props}
            className='absolute z-10 top-2.5 right-2.5 size-5 outline-none transition-opacity duration-300 hover:opacity-75'
        >
            <X className='w-full h-full text-text' />
        </button>
    );
});
