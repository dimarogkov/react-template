import { Link } from 'react-router-dom';
import { COMPONENTS_SECTIONS, LOADER_CODE, LOADER_USAGE_CODE } from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { LoaderPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const LoaderPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={COMPONENTS_SECTIONS} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Loader
                        </Title>

                        <Text size='large'>A reusable component for indicating loading or processing states.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <LoaderPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[LOADER_CODE]}>
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Loader.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Loader</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[LOADER_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
