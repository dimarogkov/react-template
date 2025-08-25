import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PATHS } from '../../variables';
import {
    AccordionPage,
    AlertPage,
    AvatarPage,
    BadgePage,
    BreadcrumbPage,
    BtnPage,
    CardPage,
    CheckboxPage,
    DropdownPage,
    DocumentationPage,
    HomePage,
    InputPage,
    InputPasswordPage,
    LabelPage,
    LoaderPage,
    ModalPage,
    NotFoundPage,
    PaginationPage,
    ProgressPage,
    RadioPage,
    SelectPage,
    SeparatorPage,
    SimpleLinkPage,
    SwitchPage,
    TabsPage,
    TextareaPage,
    TextPage,
    TitlePage,
    ToastPage,
    TooltipPage,
    ReactQueryPage,
    RtkQueryPage,
    YupPage,
    ZodPage,
    ReduxToolkitPage,
    ZustandPage,
} from '../pages';
import { App } from '../../App';

export const Root = () => {
    const { MAIN, COMPONENTS, DATA_FETCHING, FORM_VALIDATION, STORE } = PATHS.PAGES;

    return (
        <Router>
            <Routes>
                <Route path={PATHS.HOME} element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path={PATHS.NOT_FOUND} element={<NotFoundPage />} />

                    <Route path={MAIN.DOCUMENTATION}>
                        <Route index element={<DocumentationPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.ACCORDION}`} element={<AccordionPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.ALERT}`} element={<AlertPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.AVATAR}`} element={<AvatarPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BADGE}`} element={<BadgePage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BREADCRUMB}`} element={<BreadcrumbPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.BTN}`} element={<BtnPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.CARD}`} element={<CardPage />} />
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
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.PAGINATION}`} element={<PaginationPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.PROGRESS}`} element={<ProgressPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.RADIO}`} element={<RadioPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SELECT}`} element={<SelectPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SEPARATOR}`} element={<SeparatorPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SIMPLE_LINK}`} element={<SimpleLinkPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.SWITCH}`} element={<SwitchPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TABS}`} element={<TabsPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TEXT}`} element={<TextPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TEXTAREA}`} element={<TextareaPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TITLE}`} element={<TitlePage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TOAST}`} element={<ToastPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${COMPONENTS.TOOLTIP}`} element={<TooltipPage />} />

                        <Route
                            path={`${MAIN.DOCUMENTATION}${DATA_FETCHING.REACT_QUERY}`}
                            element={<ReactQueryPage />}
                        />
                        <Route path={`${MAIN.DOCUMENTATION}${DATA_FETCHING.RTK_QUERY}`} element={<RtkQueryPage />} />

                        <Route path={`${MAIN.DOCUMENTATION}${FORM_VALIDATION.YUP}`} element={<YupPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${FORM_VALIDATION.ZOD}`} element={<ZodPage />} />

                        <Route path={`${MAIN.DOCUMENTATION}${STORE.REDUX_TOOLKIT}`} element={<ReduxToolkitPage />} />
                        <Route path={`${MAIN.DOCUMENTATION}${STORE.ZUSTAND}`} element={<ZustandPage />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};
