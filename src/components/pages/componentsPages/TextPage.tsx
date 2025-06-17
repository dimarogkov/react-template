import { useSectionsRefs } from '../../../hooks';
import { EnumText, EnumTitle } from '../../../types/enums';
import { TEXT_CODE, TEXT_ENUM_CODE, TEXT_USAGE_CODE } from '../../../variables/code';
import {
    ComponentsCode,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { Text, Title } from '../../ui';

export const TextPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} />

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

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[TEXT_ENUM_CODE, TEXT_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Code
                        </Title>

                        <Text>
                            Add enum file <span className='badge-item'>EnumText</span> and custom component&nbsp;
                            <span className='badge-item'>Text</span> to your project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TEXT_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    {/* <ComponentsFooter /> */}
                </div>
            </div>
        </section>
    );
};
