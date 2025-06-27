import { Link } from 'react-router-dom';
import {
    NPM_CLASSNAMES_CODE,
    COMPONENTS_SECTIONS,
    AVATAR_ENUM_CODE,
    AVATAR_CODE,
    AVATAR_WRAPPER_CODE,
    AVATAR_LINK_CODE,
    AVATAR_IMG_CODE,
    AVATAR_GROUP_CODE,
    AVATAR_USAGE_CODE,
    AVATAR_LINK_USAGE_CODE,
    AVATAR_GROUP_USAGE_CODE,
} from '../../../variables/code';
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
import { SimpleLink, Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';
import { AvatarPreview } from '../../elements/preview';

export const AvatarPage = () => {
    const { sectionRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'link', text: 'Link' },
        { id: 'group', text: 'Group' },
    ];

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <ComponentsSidebar />
                    <ComponentsNavigation sectionRef={sectionRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title titleType={EnumTitle.h2} className='mb-1 md:mb-2 last:mb-0'>
                            Avatar
                        </Title>

                        <Text textType={EnumText.large}>
                            An image element with a fallback for representing the user.
                        </Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <AvatarPreview />
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

                    <ComponentsCode
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            AVATAR_ENUM_CODE,
                            AVATAR_CODE,
                            AVATAR_WRAPPER_CODE,
                            AVATAR_LINK_CODE,
                            AVATAR_IMG_CODE,
                            AVATAR_GROUP_CODE,
                        ]}
                    >
                        <Title titleType={EnumTitle.h4} className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                            <span>Code</span>

                            <Link
                                to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Avatar'
                                target='_blank'
                                className='transition-colors duration-300 hover:text-text'
                            >
                                <ArrowUpRight />
                            </Link>
                        </Title>

                        <Text>
                            Include an <span className='badge-item'>EnumAvatar</span> file to define avatars variants,
                            along with a custom <span className='badge-item'>Avatar</span> component for consistent and
                            maintainable avatar usage throughout the project.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[AVATAR_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4}>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='link' ref={registerRef('link')} codeArr={[AVATAR_LINK_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Link
                        </Title>

                        <Text>
                            To make the avatar clickable, wrap it with the&nbsp;
                            <span className='badge-item'>Avatar.Link</span> child component and provide an&nbsp;
                            <span className='badge-item'>href</span> prop.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='group' ref={registerRef('group')} codeArr={[AVATAR_GROUP_USAGE_CODE]}>
                        <Title titleType={EnumTitle.h4} className='mb-1 md:mb-1.5 last:mb-0'>
                            Group
                        </Title>

                        <Text>
                            To group multiple avatars together, wrap them with the&nbsp;
                            <span className='badge-item'>AvatarGroup</span> component. You can also use the&nbsp;
                            <span className='badge-item'>visibleCount</span> prop to limit the number of avatars
                            displayed.
                        </Text>
                    </ComponentsCode>

                    <ComponentsFooter />
                </div>
            </div>
        </section>
    );
};
