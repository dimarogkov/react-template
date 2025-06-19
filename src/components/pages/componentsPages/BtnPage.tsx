import { useSectionsRefs } from '../../../hooks';
import { EnumBtn, EnumText, EnumTitle } from '../../../types/enums';
import { BTN_CODE, BTN_ENUM_CODE, BTN_USAGE_CODE, NPM_CLASSNAMES_CODE } from '../../../variables/code';
import {
    ComponentsCode,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsSidebar,
} from '../../blocks';
import { Btn, SimpleLink, Text, Title } from '../../ui';
import { User } from 'lucide-react';

export const BtnPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} withInstallation />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Button
                        </Title>

                        <Text textType={EnumText.large}>
                            Displays a button or a component that looks like a button.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <div className='flex flex-col gap-4 w-full'>
                            <Btn>Default Button</Btn>
                            <Btn btnType={EnumBtn.secondary}>Secondary Button</Btn>
                            <Btn btnType={EnumBtn.outline}>Outline Button</Btn>
                            <Btn btnType={EnumBtn.ghost}>Ghost Button</Btn>

                            <Btn>
                                <User className='size-5' />
                                <span>Icon Button</span>
                            </Btn>
                        </div>
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

                    <ComponentsCode id='code' ref={registerRef('code')} codeArr={[BTN_ENUM_CODE, BTN_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Code
                        </Title>

                        <Text>
                            Include an <span className='badge-item'>EnumBtn</span> file to define button variants, along
                            with a custom <span className='badge-item'>Btn</span> component for consistent and
                            maintainable button usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[BTN_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
