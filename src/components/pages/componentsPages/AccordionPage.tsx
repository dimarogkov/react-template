import { Link } from 'react-router-dom';
import {
    ACCORDION_CODE,
    ACCORDION_WRAPPER_CODE,
    ACCORDION_ITEM_CODE,
    ACCORDION_TITLE_CODE,
    ACCORDION_CONTENT_CODE,
    ACCORDION_USAGE_CODE,
    ACCORDION_ACTIVE_USAGE_CODE,
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
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
import { AccordionPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const AccordionPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'active', text: 'Active' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Accordion
                        </Title>

                        <Text size='large'>
                            A vertically stacked set of interactive headings that each reveal a section of content.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <AccordionPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
                        type='installation'
                        codeArr={[
                            { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                            { label: 'Lucide', code: NPM_LUCIDE_CODE },
                            { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
                        ]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'index.ts', code: ACCORDION_CODE },
                            { label: 'AccordionWrapper.tsx', code: ACCORDION_WRAPPER_CODE },
                            { label: 'AccordionItem.tsx', code: ACCORDION_ITEM_CODE },
                            { label: 'AccordionTitle.tsx', code: ACCORDION_TITLE_CODE },
                            { label: 'AccordionContent.tsx', code: ACCORDION_CONTENT_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Accordion'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Accordion</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ACCORDION_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='active' ref={registerRef('active')} codeArr={[ACCORDION_ACTIVE_USAGE_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Active
                        </Title>

                        <Text>
                            To make an <span className='badge-item'>Accordion.Item</span> initially open, add the&nbsp;
                            <span className='badge-item'>isOpen</span> prop to it.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
