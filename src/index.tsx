import React from 'react';
import ReactDOM from 'react-dom/client';

import { RootProviders } from './RootProviders';
import { Root } from './Root';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <RootProviders>
            <Root />
        </RootProviders>
    </React.StrictMode>
);
