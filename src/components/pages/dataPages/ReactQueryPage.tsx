import {
    COMPONENTS_SECTIONS,
    NPM_AXIOS_CODE,
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

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[NPM_CLASSNAMES_CODE, NPM_LUCIDE_CODE, NPM_AXIOS_CODE, NPM_REACT_QUERY_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            REACT_QUERY_TYPE_CODE,
                            REACT_QUERY_CODE,
                            REACT_QUERY_ADD_TODO_CODE,
                            REACT_QUERY_TODO_CODE,
                        ]}
                    >
                        <Title size='h4'>Code</Title>
                    </ComponentsCode>

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
