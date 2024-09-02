import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../../App';
import { FormPage, HomePage, NotFoundPage, ThemePage, TodosPage } from '../pages';

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
