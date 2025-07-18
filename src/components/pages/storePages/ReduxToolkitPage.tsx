import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_CODE,
    REDUX_TOOLKIT_COUNT_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
    REDUX_TOOLKIT_USAGE_CODE,
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
import { ReduxToolkitPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ReduxToolkitPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Redux Toolkit
                        </Title>

                        <Text size='large'>
                            The official, opinionated, batteries-included toolset for efficient Redux development.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ReduxToolkitPreview />
                    </ComponentsPreview>

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[NPM_REDUX_TOOLKIT_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'index.ts', code: REDUX_TOOLKIT_CODE },
                            { label: 'countSlice.ts', code: REDUX_TOOLKIT_COUNT_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/store/redux-toolkit'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode
                        id='usage'
                        ref={registerRef('usage')}
                        codeArr={[REDUX_TOOLKIT_PROVIDER_USAGE_CODE, REDUX_TOOLKIT_USAGE_CODE]}
                    >
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
