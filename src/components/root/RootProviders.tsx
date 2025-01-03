import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '../../store/redux';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

export const RootProviders: FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Provider>
    );
};
