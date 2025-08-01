import { Link } from 'react-router-dom';
import {
    BTN_LINK_CODE,
    BTN_CODE,
    BTN_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
    BTN_LINK_USAGE_CODE,
    BTN_WRAPPER_CODE,
    COMPONENTS_SECTIONS,
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
import { BtnPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const BtnPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'link', text: 'Link' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Button
                        </Title>

                        <Text size='large'>Displays a button or a component that looks like a button.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <BtnPreview />
                    </ComponentsPreview>

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        type='installation'
                        codeArr={[NPM_CLASSNAMES_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'index.ts', code: BTN_CODE },
                            { label: 'BtnWrapper.tsx', code: BTN_WRAPPER_CODE },
                            { label: 'BtnLink.tsx', code: BTN_LINK_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Btn'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Btn</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[BTN_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='link' ref={registerRef('link')} codeArr={[BTN_LINK_USAGE_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Link
                        </Title>

                        <Text>
                            You can use the <span className='badge-item'>isLink</span> prop and&nbsp;
                            <span className='badge-item'>Btn.Link</span> child component to make another component look
                            like a button. Here's an example of a link that looks like a button.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
