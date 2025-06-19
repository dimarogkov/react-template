import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    TEXT_CODE,
    TEXT_ENUM_CODE,
    TEXT_USAGE_CODE,
} from '../../../variables/code';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { SimpleLink, Text, Title } from '../../ui';

export const TextPage = () => {
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
                            Text
                        </Title>

                        <Text textType={EnumText.large}>Styles for text.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <Text textType={EnumText.large} className='mb-5 last:mb-0'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati
                            aliquid accusamus hic dicta blanditiis porro
                        </Text>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloribus obcaecati
                            aliquid accusamus hic dicta blanditiis porro
                        </Text>
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

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[TEXT_ENUM_CODE, TEXT_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Code
                        </Title>

                        <Text>
                            Include an <span className='badge-item'>EnumText</span> file to define button variants,
                            along with a custom <span className='badge-item'>Text</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TEXT_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
