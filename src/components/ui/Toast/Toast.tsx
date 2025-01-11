import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { EnumText, EnumToast } from '../../../types/enums';
import { IToast } from '../../../types/interfaces/Toast';
import { Text } from '../Text';
import { X } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: IToast;
    className?: string;
    closeToast: (toastId: string) => void;
}

export const Toast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ toast, className = '', closeToast = () => {}, ...props }, ref) => {
        const { id, type, title, text, isClosing } = toast;

        const toastClasses = {
            [EnumToast.default as string]: 'border-black/45 bg-gray',
            [EnumToast.success as string]: 'border-green bg-greenLight',
            [EnumToast.warning as string]: 'border-yellow bg-yellowLight',
            [EnumToast.error as string]: 'border-red bg-redLight',
        };

        const toastTextClasses = {
            [EnumToast.success as string]: 'text-green',
            [EnumToast.warning as string]: 'text-yellow',
            [EnumToast.error as string]: 'text-red',
        };

        return (
            <div
                ref={ref}
                {...props}
                className={cn(
                    `relative w-full sm:w-auto sm:max-w-[440px] rounded-md p-3 pr-10 border-l-4 animate-showToastAnimation ${className}`,
                    toastClasses[type],
                    {
                        'animate-hideToastAnimation': isClosing,
                    }
                )}
            >
                <div className='w-full'>
                    <Text textType={EnumText.large} className={toastTextClasses[type]}>
                        {title}
                    </Text>

                    {text && <Text>{text}</Text>}
                </div>

                <button
                    type='button'
                    onClick={() => closeToast(id)}
                    className='absolute top-1.5 right-1.5 transition-opacity duration-300 hover:opacity-65'
                >
                    <X className='w-6 h-6 stroke-1' />
                </button>
            </div>
        );
    }
);
