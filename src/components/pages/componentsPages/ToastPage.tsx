import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_HOT_TOAST_CODE,
    TOAST_TYPE_CODE,
    TOAST_CODE,
    TOAST_MAIN_USAGE_CODE,
    TOAST_USAGE_CODE,
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
import { ToastPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ToastPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Toast
                            </Title>

                            <Text size='large'>A succinct message that is displayed temporarily.</Text>
                        </ComponentsHead>

                        <ComponentsPreview>
                            <ToastPreview />
                        </ComponentsPreview>

                        <ComponentsCodeWithAccordion
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[
                                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                                { label: 'Lucide', code: NPM_LUCIDE_CODE },
                                { label: 'Hot Toast', code: NPM_HOT_TOAST_CODE },
                            ]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'ToastData.ts', code: TOAST_TYPE_CODE },
                                { label: 'Toast.tsx', code: TOAST_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Toast.tsx'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>IToastData</span> and&nbsp;
                                <span className='badge-item'>Toast</span> component for consistent and maintainable
                                usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode
                            id='usage'
                            ref={registerRef('usage')}
                            codeArr={[TOAST_MAIN_USAGE_CODE, TOAST_USAGE_CODE]}
                        >
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
