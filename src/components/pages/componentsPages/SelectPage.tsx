import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_FRAMER_MOTION_CODE,
    SELECT_DEMO_CODE,
    SELECT_TYPE_CODE,
    SELECT_CODE,
    SELECT_WRAPPER_CODE,
    SELECT_TRIGGER_CODE,
    SELECT_OPTIONS_CODE,
    SELECT_OPTION_CODE,
    SELECT_USAGE_CODE,
    SELECT_CONTROLLED_USAGE_CODE,
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
import { SelectDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const SelectPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'controlled', text: 'Controlled' },
    ];

    const preview = { code: SELECT_DEMO_CODE, demo: <SelectDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Select
                            </Title>

                            <Text size='large'>
                                Displays a list of options for the user to pick from — triggered by a button.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

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
                                { label: 'SelectItem.ts', code: SELECT_TYPE_CODE },
                                { label: 'index.ts', code: SELECT_CODE },
                                { label: 'SelectWrapper.tsx', code: SELECT_WRAPPER_CODE },
                                { label: 'SelectTrigger.tsx', code: SELECT_TRIGGER_CODE },
                                { label: 'SelectOptions.tsx', code: SELECT_OPTIONS_CODE },
                                { label: 'SelectOption.tsx', code: SELECT_OPTION_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Select'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>ISelectItem</span> and&nbsp;
                                <span className='badge-item'>Select</span> component for consistent and maintainable
                                usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[SELECT_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode
                            id='controlled'
                            ref={registerRef('controlled')}
                            codeArr={[SELECT_CONTROLLED_USAGE_CODE]}
                        >
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Controlled
                            </Title>

                            <Text>
                                To control the Select, add <span className='badge-item'>value</span> and&nbsp;
                                <span className='badge-item'>onChange</span> props to manage its state manually.
                            </Text>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
