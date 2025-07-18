import {
    COMPONENTS_SECTIONS,
    NPM_REACT_QUERY_CODE,
    REACT_QUERY_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REACT_QUERY_USAGE_CODE,
    REACT_QUERY_PROVIDER_USAGE_CODE,
    NPM_CLASSNAMES_CODE,
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
import { ReactQueryPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';

export const ReactQueryPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            React Query
                        </Title>

                        <Text size='large'>Powerful asynchronous state management for TS/JS and React.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ReactQueryPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[
                            { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                            { label: 'Lucide', code: NPM_LUCIDE_CODE },
                            { label: 'React Query', code: NPM_REACT_QUERY_CODE },
                        ]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'Todo.ts', code: REACT_QUERY_TYPE_CODE },
                            { label: 'useTodoQuery.tsx', code: REACT_QUERY_CODE },
                            { label: 'AddTodo.tsx', code: REACT_QUERY_ADD_TODO_CODE },
                            { label: 'Todo.tsx', code: REACT_QUERY_TODO_CODE },
                        ]}
                    >
                        <Title size='h4'>Code</Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode
                        id='usage'
                        ref={registerRef('usage')}
                        codeArr={[REACT_QUERY_PROVIDER_USAGE_CODE, REACT_QUERY_USAGE_CODE]}
                    >
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
