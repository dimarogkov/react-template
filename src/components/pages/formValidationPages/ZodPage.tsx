import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_HOOK_FORM_CODE,
    NPM_HOOK_FORM_RESOLVERS_CODE,
    NPM_ZOD_CODE,
    ZOD_CODE,
    ZOD_SCHEMA_CODE,
    ZOD_USAGE_CODE,
    ZOP_OPTIONS_CODE,
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
import { ZodPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ZodPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Validation with Zod
                        </Title>

                        <Text size='large'>
                            A popular schema validation library seamlessly integrated with React Hook Form for building
                            dynamic and reliable forms.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ZodPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
                        type='installation'
                        codeArr={[
                            { label: 'Zod', code: NPM_ZOD_CODE },
                            { label: 'React Hook Form', code: NPM_HOOK_FORM_CODE },
                            { label: 'Resolvers', code: NPM_HOOK_FORM_RESOLVERS_CODE },
                        ]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'index.ts', code: ZOD_CODE },
                            { label: 'formOptions.ts', code: ZOP_OPTIONS_CODE },
                            { label: 'schema.ts', code: ZOD_SCHEMA_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/form-validation/zod'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[ZOD_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
