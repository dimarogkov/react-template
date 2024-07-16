import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from './storeRedux';

type Props = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();

export const RootProviders: React.FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </Provider>
    );
};
