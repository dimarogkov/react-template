import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    INPUT_PASSWORD_DEMO_CODE,
    INPUT_PASSWORD_CODE,
    INPUT_PASSWORD_USAGE_CODE,
    INPUT_PASSWORD_CONTROLLED_USAGE_CODE,
    NPM_LUCIDE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper,
} from '../../blocks';
import { InputPasswordDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const InputPasswordPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'controlled', text: 'Controlled' },
    ];

    const preview = { code: INPUT_PASSWORD_DEMO_CODE, demo: <InputPasswordDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Input Password
                            </Title>

                            <Text size='large'>
                                Displays a form input field or a component that looks like an input field.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCode
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[NPM_LUCIDE_CODE]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCode>

                        <ComponentsCode id='code' ref={registerRef('code')} codeArr={[INPUT_PASSWORD_CODE]}>
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/InputPassword.tsx'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>InputPassword</span> component for
                                consistent and maintainable usage throughout the project.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[INPUT_PASSWORD_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode
                            id='controlled'
                            ref={registerRef('controlled')}
                            codeArr={[INPUT_PASSWORD_CONTROLLED_USAGE_CODE]}
                        >
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Controlled
                            </Title>

                            <Text>
                                To control the Input, add <span className='badge-item'>value</span> and&nbsp;
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
