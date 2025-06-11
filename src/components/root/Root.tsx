import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables';
import { ComponentsPage, FormPage, HomePage, NotFoundPage, StorePage, TodosPage } from '../pages';
import { App } from '../../App';

export const Root = () => {
    return (
        <Router basename='/react-template'>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path={PATHS.PAGES.COMPONENTS} element={<ComponentsPage />} />
                    <Route path={PATHS.PAGES.STORE} element={<StorePage />} />
                    <Route path={PATHS.PAGES.FORM} element={<FormPage />} />
                    <Route path={PATHS.PAGES.TODOS} element={<TodosPage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
