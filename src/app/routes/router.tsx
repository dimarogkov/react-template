import { createBrowserRouter } from 'react-router-dom';
import { PATHS } from './paths';

import AppLayout from '../../App';
import { DocumentationPage, HomePage, NotFoundPage } from '@components/pages/main-pages';

import {
    AccordionPage,
    AlertPage,
    AvatarPage,
    BadgePage,
    BlockquotePage,
    BreadcrumbPage,
    BtnPage,
    CardPage,
    CarouselPage,
    CheckboxPage,
    DropdownPage,
    InputPage,
    InputPasswordPage,
    LabelPage,
    LoaderPage,
    ModalPage,
    PaginationPage,
    PinInputPage,
    ProgressPage,
    RadioPage,
    ReorderPage,
    SelectPage,
    SeparatorPage,
    SimpleLinkPage,
    SwitchPage,
    TabsPage,
    TextareaPage,
    TextPage,
    TitlePage,
    ToastPage,
    TooltipPage
} from '@components/pages/components-pages';

import { RtkQueryPage, TanStackQueryPage } from '@components/pages/data-fetching-pages';
import { YupPage, ZodPage } from '@components/pages/form-validation-pages';
import { ReduxToolkitPage, ZustandPage } from '@components/pages/store-pages';

const { COMPONENTS, DATA_FETCHING, FORM_VALIDATION, STORE } = PATHS.PAGES;

export const router = createBrowserRouter(
    [
        {
            element: <AppLayout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: PATHS.DOCUMENTATION,
                    children: [
                        { index: true, element: <DocumentationPage /> },
                        { path: COMPONENTS.ACCORDION.path, element: <AccordionPage /> },
                        { path: COMPONENTS.ALERT.path, element: <AlertPage /> },
                        { path: COMPONENTS.AVATAR.path, element: <AvatarPage /> },
                        { path: COMPONENTS.BADGE.path, element: <BadgePage /> },
                        { path: COMPONENTS.BLOCKQUOTE.path, element: <BlockquotePage /> },
                        { path: COMPONENTS.BREADCRUMB.path, element: <BreadcrumbPage /> },
                        { path: COMPONENTS.BTN.path, element: <BtnPage /> },
                        { path: COMPONENTS.CARD.path, element: <CardPage /> },
                        { path: COMPONENTS.CAROUSEL.path, element: <CarouselPage /> },
                        { path: COMPONENTS.CHECKBOX.path, element: <CheckboxPage /> },
                        { path: COMPONENTS.DROPDOWN.path, element: <DropdownPage /> },
                        { path: COMPONENTS.INPUT.path, element: <InputPage /> },
                        { path: COMPONENTS.INPUT_PASSWORD.path, element: <InputPasswordPage /> },
                        { path: COMPONENTS.LABEL.path, element: <LabelPage /> },
                        { path: COMPONENTS.LOADER.path, element: <LoaderPage /> },
                        { path: COMPONENTS.MODAL.path, element: <ModalPage /> },
                        { path: COMPONENTS.PAGINATION.path, element: <PaginationPage /> },
                        { path: COMPONENTS.PIN_INPUT.path, element: <PinInputPage /> },
                        { path: COMPONENTS.PROGRESS.path, element: <ProgressPage /> },
                        { path: COMPONENTS.RADIO.path, element: <RadioPage /> },
                        { path: COMPONENTS.REORDER.path, element: <ReorderPage /> },
                        { path: COMPONENTS.SELECT.path, element: <SelectPage /> },
                        { path: COMPONENTS.SEPARATOR.path, element: <SeparatorPage /> },
                        { path: COMPONENTS.SIMPLE_LINK.path, element: <SimpleLinkPage /> },
                        { path: COMPONENTS.SWITCH.path, element: <SwitchPage /> },
                        { path: COMPONENTS.TABS.path, element: <TabsPage /> },
                        { path: COMPONENTS.TEXT.path, element: <TextPage /> },
                        { path: COMPONENTS.TEXTAREA.path, element: <TextareaPage /> },
                        { path: COMPONENTS.TITLE.path, element: <TitlePage /> },
                        { path: COMPONENTS.TOAST.path, element: <ToastPage /> },
                        { path: COMPONENTS.TOOLTIP.path, element: <TooltipPage /> },
                        { path: DATA_FETCHING.RTK_QUERY.path, element: <RtkQueryPage /> },
                        { path: DATA_FETCHING.TANSTACK_QUERY.path, element: <TanStackQueryPage /> },
                        { path: FORM_VALIDATION.YUP.path, element: <YupPage /> },
                        { path: FORM_VALIDATION.ZOD.path, element: <ZodPage /> },
                        { path: STORE.REDUX_TOOLKIT.path, element: <ReduxToolkitPage /> },
                        { path: STORE.ZUSTAND.path, element: <ZustandPage /> }
                    ]
                },
                { path: '*', element: <NotFoundPage /> }
            ]
        }
    ],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true
        }
    }
);
