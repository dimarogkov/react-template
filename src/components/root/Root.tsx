import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormPage, HomePage, NotFoundPage, StorePage, TodosPage, UIPage } from '../pages';
import { PATHS } from '../../variables/paths';
import { App } from '../../App';

export const Root = () => {
    return (
        <Router basename='/react-template'>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path={PATHS.UI} element={<UIPage />} />
                    <Route path={PATHS.STORE} element={<StorePage />} />
                    <Route path={PATHS.FORM} element={<FormPage />} />
                    <Route path={PATHS.TODOS} element={<TodosPage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
