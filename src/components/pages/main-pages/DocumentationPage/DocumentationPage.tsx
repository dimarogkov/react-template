import { Link } from 'react-router-dom';
import { useSectionsRefs } from '@hooks';
import { DATA } from './data';
import { ComponentsFooter, ComponentsHead, ComponentsNavigation, ComponentsWrapper } from '@components/organisms';
import { IntroductionContent } from '@components/molecules';
import { Separator, Text, Title } from '@components/atoms';

export const DocumentationPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const sectionsArr = DATA.map(({ title }) => ({ id: title.toLowerCase(), text: title }));

    return (
        <>
            <section className="relative w-full">
                <div className="page-container">
                    <ComponentsWrapper
                        navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                    >
                        <div className="w-full xl:px-7.5">
                            <ComponentsHead>
                                <IntroductionContent />
                            </ComponentsHead>

                            {DATA.map(({ title, text, links }) => (
                                <div
                                    key={title}
                                    id={title.toLowerCase()}
                                    ref={registerRef(title.toLowerCase())}
                                    className="w-full scroll-mt-29 py-6 md:py-12"
                                >
                                    <Title size="h3" className="mb-1 last:mb-0 md:mb-2">
                                        {title}
                                    </Title>

                                    <Text size="large">{text}</Text>

                                    <Separator className="my-5" />

                                    <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                                        {links.map(({ name, href, isNew }) => (
                                            <Link
                                                key={name}
                                                to={href}
                                                className="text-text flex items-center gap-2.5 text-lg font-medium hover:underline"
                                            >
                                                <span>{name}</span>
                                                {isNew && <span className="bg-blue flex size-2 rounded-full" />}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <ComponentsFooter />
                        </div>
                    </ComponentsWrapper>
                </div>
            </section>
        </>
    );
};
