import { Link } from 'react-router-dom';
import { COMPONENTS_SECTIONS, NPM_CLASSNAMES_CODE, PROGRESS_CODE, PROGRESS_USAGE_CODE } from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { ProgressPreview } from '../../elements/preview';
import { SimpleLink, Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ProgressPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Progress
                        </Title>

                        <Text size='large'>
                            Displays an indicator showing the completion progress of a task, typically displayed as a
                            progress bar.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <ProgressPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_CLASSNAMES_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Installation
                        </Title>

                        <Text>
                            This component relies on the <span className='badge-item'>сlassnames</span> library for
                            conditional class management. Please make sure to install it before use. Full documentation
                            is available via the links -&nbsp;
                            <SimpleLink href='https://github.com/JedWatson/classnames#readme' target='_blank'>
                                Documentation
                            </SimpleLink>
                            ,&nbsp;
                            <SimpleLink href='https://www.npmjs.com/package/classnames' target='_blank'>
                                NPM Page
                            </SimpleLink>
                            .
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[PROGRESS_CODE]}>
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Progress.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Progress</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[PROGRESS_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
