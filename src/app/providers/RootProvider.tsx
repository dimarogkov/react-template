import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@store/redux-toolkit';
import { MainProvider } from './MainProvider';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

export const RootProvider = ({ children }: Props) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <MainProvider>{children}</MainProvider>
            </QueryClientProvider>
        </Provider>
    );
};
