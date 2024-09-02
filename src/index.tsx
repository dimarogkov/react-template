import React from 'react';
import ReactDOM from 'react-dom/client';
import { Root, RootProviders } from './components/root';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <RootProviders>
            <Root />
        </RootProviders>
    </React.StrictMode>
);
