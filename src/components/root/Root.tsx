import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { App } from '../../App';
import { FormPage, HomePage, NotFoundPage, ThemePage, TodosPage } from '../pages';

export const Root = () => {
    return (
        <Router basename='/react-template'>
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
