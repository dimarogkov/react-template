import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_LUCIDE_CODE,
    NPM_CLASSNAMES_CODE,
    PAGINATION_CODE,
    PAGINATION_WRAPPER_CODE,
    PAGINATION_PREVIOUS_CODE,
    PAGINATION_ITEM_CODE,
    PAGINATION_NEXT_CODE,
    PAGINATION_ELLIPSIS_CODE,
    PAGINATION_HOOK_CODE,
    PAGINATION_HELPER_CODE,
    PAGINATION_DEMO_CODE,
    PAGINATION_USAGE_CODE,
    PAGINATION_DATA_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper,
} from '../../blocks';
import { PaginationDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const PaginationPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'data', text: 'Data' },
    ];

    const preview = { code: PAGINATION_DEMO_CODE, demo: <PaginationDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Pagination
                            </Title>

                            <Text size='large'>Pagination with page navigation, next and previous links.</Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCodeWithAccordion
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[
                                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                                { label: 'Lucide', code: NPM_LUCIDE_CODE },
                            ]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'index.ts', code: PAGINATION_CODE },
                                { label: 'PaginationWrapper.tsx', code: PAGINATION_WRAPPER_CODE },
                                { label: 'PaginationPrevious.tsx', code: PAGINATION_PREVIOUS_CODE },
                                { label: 'PaginationItem.tsx', code: PAGINATION_ITEM_CODE },
                                { label: 'PaginationNext.tsx', code: PAGINATION_NEXT_CODE },
                                { label: 'PaginationEllipsis.tsx', code: PAGINATION_ELLIPSIS_CODE },
                                { label: 'usePagination.tsx', code: PAGINATION_HOOK_CODE },
                                { label: 'getPaginationRange.ts', code: PAGINATION_HELPER_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Pagination'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>Pagination</span> component for consistent
                                and maintainable usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[PAGINATION_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode id='data' ref={registerRef('data')} codeArr={[PAGINATION_DATA_USAGE_CODE]}>
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Data
                            </Title>

                            <Text>
                                Here's an example of controlling the pagination state and using the state to chunk the
                                data.
                            </Text>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
