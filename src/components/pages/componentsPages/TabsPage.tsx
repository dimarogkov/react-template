import { Link } from 'react-router-dom';
import {
    COMPONENTS_SECTIONS,
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    TABS_CODE,
    TABS_WRAPPER_CODE,
    TABS_LIST_CODE,
    TABS_TAB_CODE,
    TABS_PANELS_CODE,
    TABS_PANEL_CODE,
    TABS_DEMO_CODE,
    TABS_USAGE_CODE,
    TABS_ACTIVE_USAGE_CODE,
    TABS_ANIMATION_USAGE_CODE,
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
import { TabsDemo } from '../../elements/demo';
import { Text, Title } from '../../ui';
import { ArrowUpRight } from 'lucide-react';

export const TabsPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = [
        { id: 'installation', text: 'Installation' },
        ...COMPONENTS_SECTIONS,
        { id: 'active', text: 'Active' },
        { id: 'animation', text: 'Animation' },
    ];

    const preview = { code: TABS_DEMO_CODE, demo: <TabsDemo /> };

    return (
        <section className='relative w-full'>
            <div className='container'>
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className='w-full xl:px-[30px]'>
                        <ComponentsHead>
                            <Title size='h2' className='mb-1 md:mb-2 last:mb-0'>
                                Tabs
                            </Title>

                            <Text size='large'>
                                A set of layered sections of content — known as tab panels — that are displayed one at a
                                time.
                            </Text>
                        </ComponentsHead>

                        <ComponentsPreview preview={preview} />

                        <ComponentsCodeWithAccordion
                            id='installation'
                            ref={registerRef('installation')}
                            type='installation'
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
                                { label: 'index.ts', code: TABS_CODE },
                                { label: 'TabsWrapper.tsx', code: TABS_WRAPPER_CODE },
                                { label: 'TabsList.tsx', code: TABS_LIST_CODE },
                                { label: 'TabsTab.tsx', code: TABS_TAB_CODE },
                                { label: 'TabsPanels.tsx', code: TABS_PANELS_CODE },
                                { label: 'TabsPanel.tsx', code: TABS_PANEL_CODE },
                            ]}
                        >
                            <Title size='h4' className='flex items-center gap-1 mb-1 md:mb-1.5 last:mb-0'>
                                <span>Code</span>

                                <Link
                                    to='https://github.com/dimarogkov/react-template/tree/master/src/components/ui/Tabs'
                                    target='_blank'
                                    className='transition-colors duration-300 hover:text-text'
                                >
                                    <ArrowUpRight />
                                </Link>
                            </Title>

                            <Text>
                                Include a custom <span className='badge-item'>Tabs</span> component for consistent and
                                maintainable usage throughout the project.
                            </Text>
                        </ComponentsCodeWithAccordion>

                        <ComponentsCode id='usage' ref={registerRef('usage')} codeArr={[TABS_USAGE_CODE]}>
                            <Title size='h4'>Usage</Title>
                        </ComponentsCode>

                        <ComponentsCode id='active' ref={registerRef('active')} codeArr={[TABS_ACTIVE_USAGE_CODE]}>
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Active
                            </Title>

                            <Text>
                                To make an <span className='badge-item'>Tabs</span> initially active, add the&nbsp;
                                <span className='badge-item'>defaultActiveIndex</span> prop to it.
                            </Text>
                        </ComponentsCode>

                        <ComponentsCode
                            id='animations'
                            ref={registerRef('animation')}
                            codeArr={[TABS_ANIMATION_USAGE_CODE]}
                        >
                            <Title size='h4' className='mb-1 md:mb-1.5 last:mb-0'>
                                Animation
                            </Title>

                            <Text>
                                To enable animations for <span className='badge-item'>Tabs</span> — use the&nbsp;
                                <span className='badge-item'>hasAnimation</span> prop.
                            </Text>
                        </ComponentsCode>

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
