import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_REDUX_TOOLKIT_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
    RTK_QUERY_DEMO_CODE,
    RTK_QUERY_CODE,
    RTK_QUERY_SLICE_CODE,
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
import { RtkQueryDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';

export const RtkQueryPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    const preview = { code: RTK_QUERY_DEMO_CODE, demo: <RtkQueryDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                RTK Query
                            </Title>

                            <Text size='large'>
                                Powerful data fetching and caching tool. It is designed to simplify common cases for
                                loading data in a web application, eliminating the need to hand-write data fetching &
                                caching logic yourself.
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
                                { label: 'Redux Toolkit', code: NPM_REDUX_TOOLKIT_CODE },
                            ]}
                        >
                            <Title size='h4'>Installation</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'Todo.ts', code: REACT_QUERY_TYPE_CODE },
                                { label: 'index.ts', code: RTK_QUERY_CODE },
                                { label: 'todosApiSlice.ts', code: RTK_QUERY_SLICE_CODE },
                                { label: 'AddTodo.tsx', code: REACT_QUERY_ADD_TODO_CODE },
                                { label: 'Todo.tsx', code: REACT_QUERY_TODO_CODE },
                            ]}
                        >
                            <Title size='h4'>Code</Title>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode
                            id='usage'
                            ref={registerRef('usage')}
                            codeArr={[REDUX_TOOLKIT_PROVIDER_USAGE_CODE, RTK_QUERY_DEMO_CODE]}
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
