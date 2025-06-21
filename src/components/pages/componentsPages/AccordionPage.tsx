import { Link } from 'react-router-dom';
import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import {
    ACCORDION_CODE,
    ACCORDION_CONTENT_CODE,
    ACCORDION_ENUM_CODE,
    ACCORDION_ITEM_CODE,
    ACCORDION_TITLE_CODE,
    ACCORDION_USAGE_ACTIVE_CODE,
    ACCORDION_USAGE_CODE,
    ACCORDION_WRAPPER_CODE,
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
} from '../../../variables/code';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { Accordion, SimpleLink, Text, Title } from '../../ui';
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
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            <span>Accordion</span>
                        </Title>

                        <Text textType={EnumText.large}>
                            A vertically stacked set of interactive headings that each reveal a section of content.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <Accordion className='mb-5 last:mb-0'>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 1</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 2</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet.
                                </Accordion.Content>
                            </Accordion.Item>
                            <Accordion.Item>
                                <Accordion.Title>Accordion Title 3</Accordion.Title>
                                <Accordion.Content>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque officia
                                    eveniet.
                                </Accordion.Content>
                            </Accordion.Item>
                        </Accordion>
                    </ComponentsPreview>

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_CLASSNAMES_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Installation
                        </Title>

                        <Text>
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

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            ACCORDION_ENUM_CODE,
                            ACCORDION_CODE,
                            ACCORDION_WRAPPER_CODE,
                            ACCORDION_ITEM_CODE,
                            ACCORDION_TITLE_CODE,
                            ACCORDION_CONTENT_CODE,
                        ]}
                    >
                        <Title titleType={EnumTitle.h4} className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
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
                            Include an <span className='badge-item'>EnumAccordionIcon</span> file to define button
                            variants, along with a custom <span className='badge-item'>Accordion</span> component for
                            consistent and maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ACCORDION_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='active' ref={registerRef('active')} codeArr={[ACCORDION_USAGE_ACTIVE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Active</Title>

                        <Text>
                            For active status add <span className='badge-item'>isOpen</span> prop for&nbsp;
                            <span className='badge-item'>Accordion.Item</span> child component.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
