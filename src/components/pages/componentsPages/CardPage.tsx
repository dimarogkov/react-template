import { Link } from 'react-router-dom';
import {
    CARD_CODE,
    CARD_WRAPPER_CODE,
    CARD_HEAD_CODE,
    CARD_BODY_CODE,
    CARD_FOOTER_CODE,
    CARD_USAGE_CODE,
    COMPONENTS_SECTIONS,
} from '../../../variables/code';
import { useSectionsRefs } from '../../../hooks';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper,
} from '../../blocks';
import { CardPreview } from '../../elements/preview';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const CardPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={COMPONENTS_SECTIONS} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Card
                            </Title>

                            <Text size='large'>Displays a card with header, content, and footer.</Text>
                        </ComponentsHead>

                        <ComponentsPreview>
                            <CardPreview />
                        </ComponentsPreview>

                        <ComponentsCodeWithAccordion
                            id='code'
                            ref={registerRef('code')}
                            codeArr={[
                                { label: 'index.ts', code: CARD_CODE },
                                { label: 'CardWrapper.tsx', code: CARD_WRAPPER_CODE },
                                { label: 'CardHead.tsx', code: CARD_HEAD_CODE },
                                { label: 'CardBody.tsx', code: CARD_BODY_CODE },
                                { label: 'CardFooter.tsx', code: CARD_FOOTER_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Card'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>Card</span> component for consistent and
                                maintainable usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[CARD_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
