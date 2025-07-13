import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    TOOLTIP_CODE,
    TOOLTIP_WRAPPER_CODE,
    TOOLTIP_TRIGGER_CODE,
    TOOLTIP_CONTENT_CODE,
    TOOLTIP_USAGE_CODE,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { TooltipPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const TooltipPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={COMPONENTS_SECTIONS} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Tooltip
                        </Title>

                        <Text size='large'>
                            A popup that displays information related to an element when the element receives keyboard
                            focus or the mouse hovers over it.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <TooltipPreview />
                    </ComponentsPreview>

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[TOOLTIP_CODE, TOOLTIP_WRAPPER_CODE, TOOLTIP_TRIGGER_CODE, TOOLTIP_CONTENT_CODE]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Tooltip'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Tooltip</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TOOLTIP_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
