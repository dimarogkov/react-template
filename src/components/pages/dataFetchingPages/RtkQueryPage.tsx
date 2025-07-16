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

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[NPM_CLASSNAMES_CODE, NPM_LUCIDE_CODE, NPM_REDUX_TOOLKIT_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            REACT_QUERY_TYPE_CODE,
                            RTK_QUERY_CODE,
                            RTK_QUERY_SLICE_CODE,
                            REACT_QUERY_ADD_TODO_CODE,
                            REACT_QUERY_TODO_CODE,
                        ]}
                    >
                        <Title size='h4'>Code</Title>
                    </ComponentsCode>

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
