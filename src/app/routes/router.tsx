import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
    MAIN_PAGES_PATH,
    COMPONENTS_PAGES_PATH,
    DATA_FETCHING_PAGES_PATH,
    FORM_VALIDATION_PAGES_PATH,
    STORE_PAGES_PATH,
    PATHS,
} from './paths';

// main pages
const AppLayout = lazy(() => import(`../../App`));
const HomePage = lazy(() => import(`@components/${MAIN_PAGES_PATH}/HomePage/HomePage`));
const DocumentationPage = lazy(() => import(`@components/${MAIN_PAGES_PATH}/DocumentationPage/DocumentationPage`));
const NotFoundPage = lazy(() => import(`@components/${MAIN_PAGES_PATH}/NotFoundPage/NotFoundPage`));

// components pages
const AccordionPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/AccordionPage/AccordionPage`));
const AlertPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/AlertPage/AlertPage`));
const AvatarPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/AvatarPage/AvatarPage`));
const BadgePage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/BadgePage/BadgePage`));
const BlockquotePage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/BlockquotePage/BlockquotePage`));
const BreadcrumbPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/BreadcrumbPage/BreadcrumbPage`));
const BtnPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/BtnPage/BtnPage`));
const CardPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/CardPage/CardPage`));
const CarouselPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/CarouselPage/CarouselPage`));
const CheckboxPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/CheckboxPage/CheckboxPage`));
const DropdownPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/DropdownPage/DropdownPage`));
const InputPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/InputPage/InputPage`));
const InputPasswordPage = lazy(
    () => import(`@components/${COMPONENTS_PAGES_PATH}/InputPasswordPage/InputPasswordPage`)
);
const LabelPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/LabelPage/LabelPage`));
const LoaderPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/LoaderPage/LoaderPage`));
const ModalPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/ModalPage/ModalPage`));
const PaginationPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/PaginationPage/PaginationPage`));
const PinInputPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/PinInputPage/PinInputPage`));
const ProgressPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/ProgressPage/ProgressPage`));
const RadioPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/RadioPage/RadioPage`));
const ReorderPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/ReorderPage/ReorderPage`));
const SelectPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/SelectPage/SelectPage`));
const SeparatorPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/SeparatorPage/SeparatorPage`));
const SimpleLinkPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/SimpleLinkPage/SimpleLinkPage`));
const SwitchPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/SwitchPage/SwitchPage`));
const TabsPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/TabsPage/TabsPage`));
const TextPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/TextPage/TextPage`));
const TextareaPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/TextareaPage/TextareaPage`));
const TitlePage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/TitlePage/TitlePage`));
const ToastPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/ToastPage/ToastPage`));
const TooltipPage = lazy(() => import(`@components/${COMPONENTS_PAGES_PATH}/TooltipPage/TooltipPage`));

// data fetching pages
const RtkQueryPage = lazy(() => import(`@components/${DATA_FETCHING_PAGES_PATH}/RtkQueryPage/RtkQueryPage`));
const TanStackQueryPage = lazy(
    () => import(`@components/${DATA_FETCHING_PAGES_PATH}/TanStackQueryPage/TanStackQueryPage`)
);

// form validation pages
const YupPage = lazy(() => import(`@components/${FORM_VALIDATION_PAGES_PATH}/YupPage/YupPage`));
const ZodPage = lazy(() => import(`@components/${FORM_VALIDATION_PAGES_PATH}/ZodPage/ZodPage`));

// store pages
const ReduxToolkitPage = lazy(() => import(`@components/${STORE_PAGES_PATH}/ReduxToolkitPage/ReduxToolkitPage`));
const ZustandPage = lazy(() => import(`@components/${STORE_PAGES_PATH}/ZustandPage/ZustandPage`));

const { COMPONENTS, DATA_FETCHING, FORM_VALIDATION, STORE } = PATHS.PAGES;

export const router = createBrowserRouter([
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
                    { path: STORE.ZUSTAND.path, element: <ZustandPage /> },
                ],
            },
            { path: '*', element: <NotFoundPage /> },
        ],
    },
]);
