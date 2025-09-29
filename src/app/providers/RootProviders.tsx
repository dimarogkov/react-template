import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@store/redux-toolkit';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

export default function RootProviders({ children }: Props) {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Provider>
    );
}
