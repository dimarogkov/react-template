import { FC } from 'react';
import { IToast } from '../types/interfaces/Toast';
import { Toast } from '../components/ui';

type Props = {
    toasts: IToast[];
    closeToast: (toastId: string) => void;
};

export const ToastOutlet: FC<Props> = ({ toasts, closeToast = () => {} }) => {
    return (
        <div className='fixed z-10 bottom-0 sm:bottom-2 md:bottom-3 sm:right-2 md:right-3 flex flex-col items-end gap-3 w-full sm:w-auto p-4 sm:p-0'>
            {toasts.map((toast) => (
                <Toast key={toast.id} toast={toast} closeToast={closeToast} />
            ))}
        </div>
    );
};
