import { Link } from 'react-router-dom';
import { COMPONENTS_SECTIONS, NPM_CLASSNAMES_CODE, RADIO_CODE, RADIO_USAGE_CODE } from '../../../variables/code';
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
import { RadioPreview } from '../../elements/preview';
import { SimpleLink, Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const RadioPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [{ id: 'installation', text: 'Installation' }, ...COMPONENTS_SECTIONS];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Radio
                        </Title>

                        <Text textType={EnumText.large}>
                            A set of checkable buttons—known as radio buttons—where no more than one of the buttons can
                            be checked at a time.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <RadioPreview />
                    </ComponentsPreview>

                    <ComponentsCode id='installation' ref={registerRef('installation')} codeArr={[NPM_CLASSNAMES_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
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

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[RADIO_CODE]}>
                        <Title titleType={EnumTitle.h4} className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Radio.tsx'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include a custom <span className='badge-item'>Radio</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[RADIO_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
