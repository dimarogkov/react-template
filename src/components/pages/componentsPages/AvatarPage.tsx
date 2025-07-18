import { Link } from 'react-router-dom';
import {
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    COMPONENTS_SECTIONS,
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
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsNavigation,
    ComponentsPreview,
} from '../../blocks';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';
import { AvatarPreview } from '../../elements/preview';

export const AvatarPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

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
                    <ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />

                    <ComponentsHead>
                        <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                            Avatar
                        </Title>

                        <Text size='large'>An image element with a fallback for representing the user.</Text>
                    </ComponentsHead>

                    <ComponentsPreview>
                        <AvatarPreview />
                    </ComponentsPreview>

                    <ComponentsCodeWithAccordion
                        id='installation'
                        ref={registerRef('installation')}
                        codeArr={[
                            { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                            { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
                        ]}
                    >
                        <Title size='h4'>Installation</Title>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCodeWithAccordion
                        id='code'
                        ref={registerRef('code')}
                        codeArr={[
                            { label: 'index.ts', code: AVATAR_CODE },
                            { label: 'AvatarWrapper.tsx', code: AVATAR_WRAPPER_CODE },
                            { label: 'AvatarLink.tsx', code: AVATAR_LINK_CODE },
                            { label: 'AvatarImg.tsx', code: AVATAR_IMG_CODE },
                            { label: 'AvatarGroup.tsx', code: AVATAR_GROUP_CODE },
                        ]}
                    >
                        <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
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
                            Include a custom <span className='badge-item'>Avatar</span> component for consistent and
                            maintainable usage throughout the project.
                        </Text>
                    </ComponentsCodeWithAccordion>

                    <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[AVATAR_USAGE_CODE]}>
                        <Title size='h4'>Usage</Title>
                    </ComponentsCode>

                    <ComponentsCode id='link' ref={registerRef('link')} codeArr={[AVATAR_LINK_USAGE_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                            Link
                        </Title>

                        <Text>
                            To make the avatar clickable, wrap it with the&nbsp;
                            <span className='badge-item'>Avatar.Link</span> child component and provide an&nbsp;
                            <span className='badge-item'>href</span> prop.
                        </Text>
                    </ComponentsCode>

                    <ComponentsCode id='group' ref={registerRef('group')} codeArr={[AVATAR_GROUP_USAGE_CODE]}>
                        <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
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
