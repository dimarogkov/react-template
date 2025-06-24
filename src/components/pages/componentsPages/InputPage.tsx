import { Link } from 'react-router-dom';
import { COMPONENTS_SECTIONS, INPUT_CODE, INPUT_USAGE_CODE } from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { InputPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const InputPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={COMPONENTS_SECTIONS} />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Input
                        </Title>

                        <Text textType={EnumText.large}>
                            Displays a form input field or a component that looks like an input field.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <InputPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[INPUT_CODE]}>
                        <Title titleType={EnumTitle.h4} className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Input.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Input</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[INPUT_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
