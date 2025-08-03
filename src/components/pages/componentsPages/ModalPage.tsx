import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    MODAL_CODE,
    MODAL_WRAPPER_CODE,
    MODAL_TRIGGER_CODE,
    MODAL_CONTENT_CODE,
    MODAL_LAYER_CODE,
    MODAL_CLOSE_CODE,
    MODAL_USAGE_CODE,
    MODAL_DISABLE_CLOSE_BTN_USAGE_CODE,
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
import { ModalPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ModalPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'disableCloseBtn', text: 'Disable Close' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Modal
                        </Title>

                        <Text size='large'>
                            A window overlaid on either the primary window or another modal window, rendering the
                            content underneath inert.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ModalPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
                        type='installation'
                        codeArr={[
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
                            { label: 'index.ts', code: MODAL_CODE },
                            { label: 'ModalWrapper.tsx', code: MODAL_WRAPPER_CODE },
                            { label: 'ModalTrigger.tsx', code: MODAL_TRIGGER_CODE },
                            { label: 'ModalContent.tsx', code: MODAL_CONTENT_CODE },
                            { label: 'ModalLayer.tsx', code: MODAL_LAYER_CODE },
                            { label: 'ModalClose.tsx', code: MODAL_CLOSE_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Modal'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Modal</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[MODAL_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='disableCloseBtn'
                        ref={registerRef('disableCloseBtn')}
                        codeArr={[MODAL_DISABLE_CLOSE_BTN_USAGE_CODE]}
                    >
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Disable Close Button
                        </Title>

                        <Text>
                            Disable the modal's close button by adding the&nbsp;
                            <span className='badge-item'>disableCloseBtn</span> prop to&nbsp;
                            <span className='badge-item'>Modal.Content</span>.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
