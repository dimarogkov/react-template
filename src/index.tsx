import { StrictMode, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RootProvider } from '@app/providers';
import { router } from '@app/routes';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <StrictMode>
        <RootProvider>
            <Suspense fallback={null}>
                <RouterProvider router={router} />
            </Suspense>
        </RootProvider>
    </StrictMode>
);
