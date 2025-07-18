import { Link } from 'react-router-dom';
import {
    BREADCRUMB_CODE,
    BREADCRUMB_HELPERS_CODE,
    BREADCRUMB_USAGE_CODE,
    COMPONENTS_SECTIONS,
    NPM_LUCIDE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { BreadcrumbPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const BreadcrumbPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Breadcrumb
                        </Title>

                        <Text size='large'>Displays the path to the current resource using a hierarchy of links.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <BreadcrumbPreview />
                    </ComponentsPreview>

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        type='installation'
                        codeArr={[NPM_LUCIDE_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'convertUrlToString.ts', code: BREADCRUMB_HELPERS_CODE },
                            { label: 'Breadcrumb.tsx', code: BREADCRUMB_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/blocks/Breadcrumb.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Breadcrumb</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[BREADCRUMB_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
