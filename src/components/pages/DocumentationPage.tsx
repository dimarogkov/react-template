import { Link } from 'react-router-dom';
import { getLinks } from '../../helpers';
import { useSectionsRefs } from '../../hooks';
import { ComponentsFooter, ComponentsHead, ComponentsNavigation, ComponentsWrapper } from '../blocks';
import { IntroductionContent } from '../elements';
import { Separator, Text, Title } from '../ui';

export const DocumentationPage = () => {
    const { sectionsRef, registerRef } = useSectionsRefs();

    const { componentsLinks, dataFetchingLinks, formValidationLinks, storeLinks } = getLinks();

    const documentationItemsArr = [
        {
            title: 'Components',
            text: 'Here you can find all the components available in the template. We are working on adding more components.',
            links: componentsLinks,
        },
        {
            title: 'Data Fetching',
            text: 'Here you can find libraries that help you fetch, cache, and manage asynchronous data in your application.',
            links: dataFetchingLinks,
        },
        {
            title: 'Form Validation',
            text: 'Here you can learn about different form validation methods using popular libraries like Yup and Zod. We are constantly working on adding more examples and improving developer experience.',
            links: formValidationLinks,
        },
        {
            title: 'Store',
            text: 'Here you can explore all the state management solutions included in this template. We are continuously working on adding more integrations and improving existing ones.',
            links: storeLinks,
        },
    ];

    const sectionsArr = documentationItemsArr.map(({ title }) => ({ id: title.toLowerCase(), text: title }));

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <ComponentsWrapper
                        navigation={<ComponentsNavigation sectionsRef={sectionsRef} sectionsArr={sectionsArr} />}
                    >
                        <div className='w-full xl:px-[30px]'>
                            <ComponentsHead>
                                <IntroductionContent />
                            </ComponentsHead>

                            {documentationItemsArr.map(({ title, text, links }) => (
                                <div
                                    key={title}
                                    id={title.toLowerCase()}
                                    ref={registerRef(title.toLowerCase())}
                                    className='w-full py-6 md:py-12 scroll-mt-[116px]'
                                >
                                    <Title size='h3' className='mb-1 md:mb-1.5 last:mb-0'>
                                        {title}
                                    </Title>

                                    <Text size='large'>{text}</Text>

                                    <Separator className='my-5' />

                                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full'>
                                        {links.map(({ name, href }) => (
                                            <Link
                                                key={name}
                                                to={href}
                                                className='font-medium text-lg text-text hover:underline'
                                            >
                                                {name}
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
