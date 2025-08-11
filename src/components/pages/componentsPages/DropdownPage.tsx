import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    DROPDOWN_ALIGN_USAGE_CODE,
    DROPDOWN_CODE,
    DROPDOWN_CONTENT_CODE,
    DROPDOWN_POSITION_USAGE_CODE,
    DROPDOWN_TRIGGER_CODE,
    DROPDOWN_USAGE_CODE,
    DROPDOWN_WRAPPER_CODE,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
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
import { DropdownPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const DropdownPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'position', text: 'Position' },
        { id: 'align', text: 'Align' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Dropdown
                            </Title>

                            <Text size='large'>
                                Displays a menu to the user — such as a set of actions or functions — triggered by a
                                button.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview>
                            <DropdownPreview />
                        </ComponentsPreview>

                        <ComponentsCodeWithAccordion
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[
                                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
                            ]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'index.ts', code: DROPDOWN_CODE },
                                { label: 'DropdownWrapper.tsx', code: DROPDOWN_WRAPPER_CODE },
                                { label: 'DropdownTrigger.tsx', code: DROPDOWN_TRIGGER_CODE },
                                { label: 'DropdownContent.tsx', code: DROPDOWN_CONTENT_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
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
                                Include a custom <span className='badge-item'>Dropdown</span> component for consistent
                                and maintainable usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[DROPDOWN_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode
                            id='position'
                            ref={registerRef('position')}
                            codeArr={[DROPDOWN_POSITION_USAGE_CODE]}
                        >
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Position
                            </Title>

                            <Text>
                                To change the position, add the <span className='badge-item'>position</span> prop to
                                the&nbsp;
                                <span className='badge-item'>Dropdown.Content</span> child component.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode id='align' ref={registerRef('align')} codeArr={[DROPDOWN_ALIGN_USAGE_CODE]}>
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Align
                            </Title>

                            <Text>
                                To change the align, add the <span className='badge-item'>align</span> prop to the&nbsp;
                                <span className='badge-item'>Dropdown.Content</span> child component.
                            </Text>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
