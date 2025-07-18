import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_ZUSTAND_CODE,
    ZUSTAND_CODE,
    ZUSTAND_COUNT_CODE,
    ZUSTAND_USAGE_CODE,
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
import { ZustandPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ZustandPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Zustand
                        </Title>

                        <Text size='large'>A small, fast, and scalable bearbones state management solution.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ZustandPreview />
                    </ComponentsPreview>

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

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ZUSTAND_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
