import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables/paths';
import { App } from '../../App';
import { FormPage, HomePage, NotFoundPage, ThemePage, TodosPage } from '../pages';

export const Root = () => {
    return (
        <Router basename='/react-template'>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path={PATHS.FORM} element={<FormPage />} />
                    <Route path={PATHS.TODOS} element={<TodosPage />} />
                    <Route path={PATHS.THEME} element={<ThemePage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
