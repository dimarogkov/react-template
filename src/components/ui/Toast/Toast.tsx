import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { EnumText, EnumToast } from '../../../types/enums';
import { IToast } from '../../../types/interfaces/Toast';
import { Text } from '../Text';
import { CircleAlert, CircleCheck, CircleX, Info, X } from 'lucide-react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    toast: IToast;
    className?: string;
    closeToast: (toastId: string) => void;
}

export const Toast: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ toast, className = '', closeToast = () => {}, ...props }, ref) => {
        const { id, type, title, text } = toast;

        const toastClasses = {
            border: {
                [EnumToast.info as string]: 'border-l-blue',
                [EnumToast.success as string]: 'border-l-green',
                [EnumToast.warning as string]: 'border-l-yellow',
                [EnumToast.error as string]: 'border-l-red',
            },
            text: {
                [EnumToast.info as string]: 'text-blue',
                [EnumToast.success as string]: 'text-green',
                [EnumToast.warning as string]: 'text-yellow',
                [EnumToast.error as string]: 'text-red',
            },
        };

        const icon = {
            [EnumToast.info as string]: <Info className='hidden sm:block size-9 min-w-9 text-blue stroke-1' />,
            [EnumToast.success as string]: (
                <CircleCheck className='hidden sm:block size-9 min-w-9 text-green stroke-1' />
            ),
            [EnumToast.warning as string]: (
                <CircleAlert className='hidden sm:block size-9 min-w-9 text-yellow stroke-1' />
            ),
            [EnumToast.error as string]: <CircleX className='hidden sm:block size-9 min-w-9 text-red stroke-1' />,
        };

        return (
            <div
                ref={ref}
                {...props}
                role='alert'
                className={cn(
                    `relative flex items-center gap-3 w-full sm:w-[440px] rounded p-2.5 sm:p-3 pr-10 border border-l-4 border-gray bg-white animate-showToastAnimation ${className}`,
                    toastClasses.border[type]
                )}
            >
                {icon[type]}

                <div className='flex flex-col gap-1 w-full'>
                    <Text textType={EnumText.large} className={toastClasses.text[type]}>
                        {title}
                    </Text>

                    {text && <Text>{text}</Text>}
                </div>

                <button
                    type='button'
                    onClick={() => closeToast(id)}
                    className='absolute top-1.5 right-1.5 transition-opacity duration-300 hover:opacity-65'
                >
                    <X className='size-6 stroke-1' />
                </button>
            </div>
        );
    }
);
