import { createContext } from 'react';

type MainContextType = {
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
};

export const MainContext = createContext<MainContextType>({ isSidebarOpen: false, setIsSidebarOpen: () => {} });
