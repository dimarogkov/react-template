import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    TEXTAREA_CODE,
    TEXTAREA_USAGE_CODE,
    TEXTAREA_CONTROLLING_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { TextareaPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const TextareaPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [...COMPONENTS_SECTIONS, { id: 'controlling', text: 'Controlling' }];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Textarea
                        </Title>

                        <Text size='large'>Displays a form textarea or a component that looks like a textarea.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <TextareaPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[TEXTAREA_CODE]}>
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Textarea.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Textarea</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TEXTAREA_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode
                        id='controlling'
                        ref={registerRef('controlling')}
                        codeArr={[TEXTAREA_CONTROLLING_USAGE_CODE]}
                    >
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Controlling
                        </Title>

                        <Text>
                            To control the Textarea, add <span className='badge-item'>value</span> and&nbsp;
                            <span className='badge-item'>onChange</span> props to manage its state manually.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
