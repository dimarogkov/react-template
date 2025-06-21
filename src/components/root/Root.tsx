import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables';
import {
    ComponentsPage,
    FormPage,
    HomePage,
    NotFoundPage,
    StorePage,
    TodosPage,
    BtnPage,
    TextPage,
    TitlePage,
} from '../pages';
import { App } from '../../App';

export const Root = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;

    return (
        <Router>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />

                    <Route path={MAIN.COMPONENTS}>
                        <Route index element={<ComponentsPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.BTN}`} element={<BtnPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.TEXT}`} element={<TextPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.TITLE}`} element={<TitlePage />} />
                    </Route>

                    <Route path={MAIN.STORE} element={<StorePage />} />
                    <Route path={MAIN.FORM} element={<FormPage />} />
                    <Route path={MAIN.TODOS} element={<TodosPage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
