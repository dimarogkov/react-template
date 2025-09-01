import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_LUCIDE_CODE,
    NPM_REACT_QUERY_CODE,
    REACT_QUERY_DEMO_CODE,
    REACT_QUERY_CODE,
    REACT_QUERY_TYPE_CODE,
    REACT_QUERY_ADD_TODO_CODE,
    REACT_QUERY_TODO_CODE,
    REACT_QUERY_PROVIDER_USAGE_CODE,
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
import { ReactQueryDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';

export const ReactQueryPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    const preview = { code: REACT_QUERY_DEMO_CODE, demo: <ReactQueryDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                React Query
                            </Title>

                            <Text size='large'>Powerful asynchronous state management for TS/JS and React.</Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCodeWithAccordion
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
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
                            codeArr={[REACT_QUERY_PROVIDER_USAGE_CODE, REACT_QUERY_DEMO_CODE]}
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
