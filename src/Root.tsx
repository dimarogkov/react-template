import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from './App';

import { HomePage } from './components/pages/HomePage';
import { FormPage } from './components/pages/FormPage';
import { TodosPage } from './components/pages/TodosPage';
import { ThemePage } from './components/pages/ThemePage';
import { NotFoundPage } from './components/pages/NotFoundPage';

// basename='/rep' - should have rep name

export const Root = () => {
    return (
        <Router basename='/'>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='form' element={<FormPage />} />
                    <Route path='todos' element={<TodosPage />} />
                    <Route path='theme' element={<ThemePage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
