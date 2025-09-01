import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_ZUSTAND_CODE,
    ZUSTAND_CODE,
    ZUSTAND_COUNT_CODE,
    ZUSTAND_DEMO_CODE,
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
import { ZustandDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ZustandPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    const preview = { code: ZUSTAND_DEMO_CODE, demo: <ZustandDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Zustand
                            </Title>

                            <Text size='large'>A small, fast, and scalable bearbones state management solution.</Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCode
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[NPM_ZUSTAND_CODE]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCode>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'index.ts', code: ZUSTAND_CODE },
                                { label: 'count.ts', code: ZUSTAND_COUNT_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/tree/master/src/store/zustand'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ZUSTAND_DEMO_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
