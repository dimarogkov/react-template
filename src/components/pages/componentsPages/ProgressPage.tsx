import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    PROGRESS_CODE,
    PROGRESS_DEMO_CODE,
    PROGRESS_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper,
} from '../../blocks';
import { ProgressDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const ProgressPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    const preview = { code: PROGRESS_DEMO_CODE, demo: <ProgressDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Progress
                            </Title>

                            <Text size='large'>
                                Displays an indicator showing the completion progress of a task, typically displayed as
                                a progress bar.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCode
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
                            codeArr={[NPM_CLASSNAMES_CODE]}
                        >
                            <Title size='h4'>Installation</Title>
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
                                Include a custom <span className='badge-item'>Progress</span> component for consistent
                                and maintainable usage throughout the project.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[PROGRESS_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
