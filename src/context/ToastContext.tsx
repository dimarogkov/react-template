import { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { ToastOutlet } from './ToastOutlet';
import { IToast } from '../types/interfaces/Toast';

interface Props {
    children: ReactNode;
}

const ToastContext = createContext<(toast: IToast) => void>(() => {});

export const ToastProvider: FC<Props> = ({ children }) => {
    const [toasts, setToasts] = useState<IToast[]>([]);

    useEffect(() => {
        toasts.length > 6 && setToasts((prevState) => prevState.slice(1));
    }, [toasts.length]);

    const closeToast = (toastId: string) => {
        setToasts((prevState) =>
            prevState.map((toast) => {
                return toast.id === toastId ? { ...toast, isClosing: true } : toast;
            })
        );

        const time = setTimeout(() => setToasts((prev) => prev.filter(({ id }) => id !== toastId)), 300);
        return () => clearTimeout(time);
    };

    const createToast = (toast: IToast) => {
        setToasts((prev) => [...prev, toast]);

        const time = setTimeout(() => closeToast(toast.id), 3000);
        return () => clearTimeout(time);
    };

    return (
        <ToastContext.Provider value={createToast}>
            {children}
            <ToastOutlet toasts={toasts} closeToast={closeToast} />
        </ToastContext.Provider>
    );
};

export const useToast = () => useContext(ToastContext);
