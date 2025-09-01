import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    SWITCH_CODE,
    SWITCH_DEMO_CODE,
    SWITCH_USAGE_CODE,
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
import { SwitchDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const SwitchPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    const preview = { code: SWITCH_DEMO_CODE, demo: <SwitchDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Switch
                            </Title>

                            <Text size='large'>
                                A control that allows the user to toggle between checked and not checked.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

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

                        <ComponentsCode id='code' ref={registerRef('code')} codeArr={[SWITCH_CODE]}>
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Switch.tsx'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>Switch</span> component for consistent and
                                maintainable usage throughout the project.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[SWITCH_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
