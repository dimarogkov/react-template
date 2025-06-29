import { Link } from 'react-router-dom';
import {
    ACCORDION_CODE,
    ACCORDION_CONTENT_CODE,
    ACCORDION_ITEM_CODE,
    ACCORDION_TITLE_CODE,
    ACCORDION_USAGE_ACTIVE_CODE,
    ACCORDION_USAGE_CODE,
    ACCORDION_WRAPPER_CODE,
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { AccordionPreview } from '../../elements/preview';
import { SimpleLink, Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const AccordionPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'active', text: 'Active' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

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

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_CLASSNAMES_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Installation
                        </Title>

                        <Text className='mb-2.5 last:mb-0'>
                            This component relies on the <span className='badge-item'>сlassnames</span> library for
                            conditional class management. Please make sure to install it before use. Full documentation
                            is available via the links -&nbsp;
                            <SimpleLink href='https://github.com/JedWatson/classnames#readme' target='_blank'>
                                Documentation
                            </SimpleLink>
                            ,&nbsp;
                            <SimpleLink href='https://www.npmjs.com/package/classnames' target='_blank'>
                                NPM Page
                            </SimpleLink>
                            .
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode codeArr={[NPM_FRAMER_MOTION_CODE]}>
                        <Text>
                            Also you need install <span className='badge-item'>framer-motion</span> library for power
                            JavaScript animations with the performance of native browser APIs. Full documentation is
                            available via the links -&nbsp;
                            <SimpleLink href='https://motion.dev/' target='_blank'>
                                Homepage
                            </SimpleLink>
                            ,&nbsp;
                            <SimpleLink href='https://www.npmjs.com/package/framer-motion' target='_blank'>
                                NPM Page
                            </SimpleLink>
                            .
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            ACCORDION_CODE,
                            ACCORDION_WRAPPER_CODE,
                            ACCORDION_ITEM_CODE,
                            ACCORDION_TITLE_CODE,
                            ACCORDION_CONTENT_CODE,
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
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ACCORDION_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='active' ref={registerRef('active')} codeArr={[ACCORDION_USAGE_ACTIVE_CODE]}>
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
