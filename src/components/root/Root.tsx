import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables';
import {
    ComponentsPage,
    FormPage,
    HomePage,
    NotFoundPage,
    StorePage,
    TodosPage,
    AccordionPage,
    AvatarPage,
    BadgePage,
    BreadcrumbPage,
    BtnPage,
    CheckboxPage,
    DropdownPage,
    InputPage,
    InputPasswordPage,
    LabelPage,
    LoaderPage,
    ModalPage,
    ProgressPage,
    RadioPage,
    SeparatorPage,
    SimpleLinkPage,
    SwitchPage,
    TabsPage,
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
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.ACCORDION}`} element={<AccordionPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.AVATAR}`} element={<AvatarPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.BADGE}`} element={<BadgePage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.BREADCRUMB}`} element={<BreadcrumbPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.BTN}`} element={<BtnPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.CHECKBOX}`} element={<CheckboxPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.DROPDOWN}`} element={<DropdownPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.INPUT}`} element={<InputPage />} />
                        <Route
                            path={`${MAIN.COMPONENTS}${COMPONENTS.INPUT_PASSWORD}`}
                            element={<InputPasswordPage />}
                        />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.LABEL}`} element={<LabelPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.LOADER}`} element={<LoaderPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.MODAL}`} element={<ModalPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.PROGRESS}`} element={<ProgressPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.RADIO}`} element={<RadioPage />} />
                        {/* Select */}
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.SEPARATOR}`} element={<SeparatorPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.SIMPLE_LINK}`} element={<SimpleLinkPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.SWITCH}`} element={<SwitchPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.TABS}`} element={<TabsPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.TEXT}`} element={<TextPage />} />
                        <Route path={`${MAIN.COMPONENTS}${COMPONENTS.TITLE}`} element={<TitlePage />} />
                        {/* Toast */}
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
