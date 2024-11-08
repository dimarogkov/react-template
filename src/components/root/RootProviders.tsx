import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '../../store/redux';
import { ThemeProvider } from 'next-themes';

type Props = {
    children: ReactNode;
};

const queryClient = new QueryClient();

export const RootProviders: FC<Props> = ({ children }) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
                    {children}
                </ThemeProvider>
            </QueryClientProvider>
        </Provider>
    );
};
