import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_REDUX_TOOLKIT_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REDUX_TOOLKIT_PROVIDER_USAGE_CODE,
    RTK_QUERY_CODE,
    RTK_QUERY_SLICE_CODE,
    RTK_QUERY_USAGE_CODE,
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
import { RtkQueryPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';

export const RtkQueryPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            RTK Query
                        </Title>

                        <Text size='large'>
                            Powerful data fetching and caching tool. It is designed to simplify common cases for loading
                            data in a web application, eliminating the need to hand-write data fetching & caching logic
                            yourself.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <RtkQueryPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
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
                        codeArr={[REDUX_TOOLKIT_PROVIDER_USAGE_CODE, RTK_QUERY_USAGE_CODE]}
                    >
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
