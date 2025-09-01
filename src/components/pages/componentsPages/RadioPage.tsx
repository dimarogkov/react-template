import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    RADIO_CODE,
    RADIO_DEMO_CODE,
    RADIO_USAGE_CODE,
    RADIO_CONTROLLED_USAGE_CODE,
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
import { RadioDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const RadioPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'controlled', text: 'Controlled' },
    ];

    const preview = { code: RADIO_DEMO_CODE, demo: <RadioDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Radio
                            </Title>

                            <Text size='large'>
                                A set of checkable buttons — known as radio buttons — where no more than one of the
                                buttons can be checked at a time.
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
                            ]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='code' ref={registerRef('code')} codeArr={[RADIO_CODE]}>
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Radio.tsx'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>Radio</span> component for consistent and
                                maintainable usage throughout the project.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[RADIO_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode
                            id='controlled'
                            ref={registerRef('controlled')}
                            codeArr={[RADIO_CONTROLLED_USAGE_CODE]}
                        >
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Controlled
                            </Title>

                            <Text>
                                To control the Radio, add <span className='badge-item'>checked</span> and&nbsp;
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
