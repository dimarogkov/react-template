import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSectionsRefs } from '@hooks';
import { IDocumentationCodeArr, IDocumentationData } from '@interfaces/Documentation';
import {
    ComponentsCode,
    ComponentsCodeWithAccordion,
    ComponentsFooter,
    ComponentsHead,
    ComponentsLinks,
    ComponentsNavigation,
    ComponentsPreview,
    ComponentsWrapper
} from '@components/organisms';
import { PulseDot, Text, Title } from '@components/atoms';
import { ArrowUpRight } from 'lucide-react';
import cn from 'classnames';
import { getLinks } from '@utils';

type Props = {
    data: IDocumentationData;
};

export const DocumentationDetail = ({ data }: Props) => {
    const { pathname } = useLocation();
    const { sectionsRef, registerRef } = useSectionsRefs();
    const { links: pagesLinks } = getLinks();
    const { title, description, links, preview, codeSections } = data;

    const sectionsArr = codeSections.map(({ id, title }) => ({ id, text: title }));
    const isNew = pagesLinks.find(({ href }) => href === pathname)?.isNew ?? false;

    return (
        <section className="relative w-full">
            <div className="page-container">
                <ComponentsWrapper
                    navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                >
                    <div className="w-full xl:px-7.5">
                        <ComponentsHead>
                            <div className="mb-1 flex items-center gap-3 last:mb-0 md:mb-2">
                                <Title size="h2">{title}</Title>
                                {isNew && <PulseDot className="size-3" />}
                            </div>

                            <Text size="large">{description}</Text>
                        </ComponentsHead>

                        <ComponentsLinks links={links} />
                        <ComponentsPreview preview={preview} />

                        {codeSections.map(({ id, title, link, description, withAccordion, codeArr }) => (
                            <Fragment key={id}>
                                {withAccordion ? (
                                    <ComponentsCodeWithAccordion
                                        id={id}
                                        ref={registerRef(id)}
                                        {...(id === 'installation' && { type: id })}
                                        codeArr={codeArr as IDocumentationCodeArr[]}
                                    >
                                        <Title
                                            size="h4"
                                            className={cn({
                                                'flex items-center gap-1': link,
                                                'mb-1 last:mb-0 md:mb-2': description
                                            })}
                                        >
                                            {link ? <span>{title}</span> : title}

                                            {link && (
                                                <Link
                                                    to={link}
                                                    target="_blank"
                                                    className="hover:text-text transition-colors duration-300"
                                                >
                                                    <ArrowUpRight />
                                                </Link>
                                            )}
                                        </Title>

                                        {description}
                                    </ComponentsCodeWithAccordion>
                                ) : (
                                    <ComponentsCode
                                        id={id}
                                        ref={registerRef(id)}
                                        {...(id === 'installation' && { type: id })}
                                        codeArr={codeArr as string[]}
                                    >
                                        <Title
                                            size="h4"
                                            className={cn({
                                                'flex items-center gap-1': link,
                                                'mb-1 last:mb-0 md:mb-2': description
                                            })}
                                        >
                                            {link ? <span>{title}</span> : title}

                                            {link && (
                                                <Link
                                                    to={link}
                                                    target="_blank"
                                                    className="hover:text-text transition-colors duration-300"
                                                >
                                                    <ArrowUpRight />
                                                </Link>
                                            )}
                                        </Title>

                                        {description}
                                    </ComponentsCode>
                                )}
                            </Fragment>
                        ))}

                        <ComponentsFooter />
                    </div>
                </ComponentsWrapper>
            </div>
        </section>
    );
};
