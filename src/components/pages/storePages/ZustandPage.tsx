import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_ZUSTAND_CODE,
    ZUSTAND_CODE,
    ZUSTAND_COUNT_CODE,
    ZUSTAND_TYPE_CODE,
    ZUSTAND_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { ZustandPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ZustandPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Zustand
                        </Title>

                        <Text size='large'>A small, fast, and scalable bearbones state management solution.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ZustandPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_ZUSTAND_CODE]}>
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[ZUSTAND_CODE, ZUSTAND_TYPE_CODE, ZUSTAND_COUNT_CODE]}
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
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ZUSTAND_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
