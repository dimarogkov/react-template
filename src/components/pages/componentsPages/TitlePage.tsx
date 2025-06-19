import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import { TITLE_CODE, TITLE_ENUM_CODE, TITLE_USAGE_CODE } from '../../../variables/code';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { Text, Title } from '../../ui';

export const TitlePage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Title
                        </Title>

                        <Text textType={EnumText.large}>Styles for headings.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <Title className='mb-1.5 last:mb-0'>Title H1</Title>

                        <Title titleType={EnumTitle.h2} className='mb-1.5 last:mb-0'>
                            Title H2
                        </Title>

                        <Title titleType={EnumTitle.h3} className='mb-1.5 last:mb-0'>
                            Title H3
                        </Title>

                        <Title titleType={EnumTitle.h4}>Title H4</Title>
                    </ComponentsPreview>

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[TITLE_ENUM_CODE, TITLE_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Code
                        </Title>

                        <Text>
                            Include an <span className='badge-item'>EnumTitle</span> file to define button variants,
                            along with a custom <span className='badge-item'>Title</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TITLE_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
