import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_HOOK_FORM_CODE,
    NPM_HOOK_FORM_RESOLVERS_CODE,
    NPM_YUP_CODE,
    YUP_CODE,
    YUP_OPTIONS_CODE,
    YUP_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { YupPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const YupPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Form Validation with Yup
                        </Title>

                        <Text size='large'>
                            A popular schema validation library seamlessly integrated with React Hook Form for building
                            dynamic and reliable forms.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <YupPreview />
                    </ComponentsPreview>

                    <ComponentsCode
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[NPM_HOOK_FORM_CODE, NPM_YUP_CODE, NPM_HOOK_FORM_RESOLVERS_CODE]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCode>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[YUP_CODE, YUP_OPTIONS_CODE]}>
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/form-validation/yup'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[YUP_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
