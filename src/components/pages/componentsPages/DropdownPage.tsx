import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    DROPDOWN_ALIGN_USAGE_CODE,
    DROPDOWN_CODE,
    DROPDOWN_CONTENT_CODE,
    DROPDOWN_ENUM_CODE,
    DROPDOWN_POSITION_USAGE_CODE,
    DROPDOWN_TRIGGER_CODE,
    DROPDOWN_USAGE_CODE,
    DROPDOWN_WRAPPER_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { DropdownPreview } from '../../elements/preview';
import { SimpleLink, Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const DropdownPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'position', text: 'Position' },
        { id: 'align', text: 'Align' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Dropdown
                        </Title>

                        <Text textType={EnumText.large}>
                            Displays a menu to the user — such as a set of actions or functions — triggered by a button.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <DropdownPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_CLASSNAMES_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
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
                            DROPDOWN_ENUM_CODE,
                            DROPDOWN_CODE,
                            DROPDOWN_WRAPPER_CODE,
                            DROPDOWN_TRIGGER_CODE,
                            DROPDOWN_CONTENT_CODE,
                        ]}
                    >
                        <Title titleType={EnumTitle.h4} className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Dropdown'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include an <span className='badge-item'>EnumDropdownAlign</span> and&nbsp;
                            <span className='badge-item'>EnumDropdownPosition</span> files to define accordions
                            variants, along with a custom <span className='badge-item'>Dropdown</span> component for
                            consistent and maintainable accordion usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[DROPDOWN_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='position'
                        ref={registerRef('position')}
                        codeArr={[DROPDOWN_POSITION_USAGE_CODE]}
                    >
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Position
                        </Title>

                        <Text>
                            To change the position, add the <span className='badge-item'>position</span> prop to
                            the&nbsp;
                            <span className='badge-item'>Dropdown.Content</span> child component.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='align' ref={registerRef('align')} codeArr={[DROPDOWN_ALIGN_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Align
                        </Title>

                        <Text>
                            To change the align, add the <span className='badge-item'>align</span> prop to the&nbsp;
                            <span className='badge-item'>Dropdown.Content</span> child component.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
