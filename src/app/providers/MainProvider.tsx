import { ReactNode, useEffect, useMemo, useState } from 'react';
import { MainContext } from './MainContext';

type Props = {
    children: ReactNode;
};

export const MainProvider = ({ children }: Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
    }, [isSidebarOpen]);

    const value = useMemo(
        () => ({
            isSidebarOpen,
            setIsSidebarOpen
        }),
        [isSidebarOpen]
    );

    return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
