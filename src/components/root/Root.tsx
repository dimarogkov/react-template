import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables';
import {
    AccordionPage,
    AvatarPage,
    BadgePage,
    BreadcrumbPage,
    BtnPage,
    CheckboxPage,
    DropdownPage,
    DocumentationPage,
    FormPage,
    HomePage,
    InputPage,
    InputPasswordPage,
    LabelPage,
    LoaderPage,
    ModalPage,
    NotFoundPage,
    ProgressPage,
    RadioPage,
    SeparatorPage,
    SimpleLinkPage,
    SwitchPage,
    TabsPage,
    TextPage,
    TitlePage,
    ToastPage,
    TodosPage,
    ReduxToolkitPage,
    ZustandPage,
} from '../pages';
import { App } from '../../App';

export const Root = () => {
    const { MAIN, COMPONENTS, STORE } = PATHS.PAGES;

    return (
        <Router>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />

                    <Route path={MAIN.DOCUMENTATION}>
                        <Route index element={<DocumentationPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.ACCORDION}`} element={<AccordionPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.AVATAR}`} element={<AvatarPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BADGE}`} element={<BadgePage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BREADCRUMB}`} element={<BreadcrumbPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BTN}`} element={<BtnPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.CHECKBOX}`} element={<CheckboxPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.DROPDOWN}`} element={<DropdownPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.INPUT}`} element={<InputPage />} />
                        <Route
                            path={`${MAIN.DOCUMENTATION}${COMPONENTS.INPUT_PASSWORD}`}
                            element={<InputPasswordPage />}
                        />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.LABEL}`} element={<LabelPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.LOADER}`} element={<LoaderPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.MODAL}`} element={<ModalPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.PROGRESS}`} element={<ProgressPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.RADIO}`} element={<RadioPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${STORE.REDUX_TOOLKIT}`} element={<ReduxToolkitPage />} />
                        {/* Select */}
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SEPARATOR}`} element={<SeparatorPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SIMPLE_LINK}`} element={<SimpleLinkPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SWITCH}`} element={<SwitchPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TABS}`} element={<TabsPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TEXT}`} element={<TextPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TITLE}`} element={<TitlePage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TOAST}`} element={<ToastPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${STORE.ZUSTAND}`} element={<ZustandPage />} />
                    </Route>

                    <Route path={MAIN.FORM} element={<FormPage />} />
                    <Route path={MAIN.TODOS} element={<TodosPage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};
