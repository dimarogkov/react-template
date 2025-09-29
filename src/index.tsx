import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RootProviders } from '@app/providers';
import { router } from '@app/routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <RootProviders>
            <Suspense fallback={null}>
                <RouterProvider router={router} />
            </Suspense>
        </RootProviders>
    </StrictMode>
);
