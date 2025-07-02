import { Link } from 'react-router-dom';
import { getComponentsLinks } from '../../helpers';
import { Separator, Text, Title } from '../ui';

export const ComponentsPage = () => {
    const linksArr = getComponentsLinks();

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <div className='w-full'>
                        <Title size='h2' className='mb-2 last:mb-0'>
                            Components
                        </Title>

                        <Text size='large'>
                            Here you can find all the components available in the template. We are working on adding
                            more components.
                        </Text>

                        <Separator className='my-5' />

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full'>
                            {linksArr.map(({ name, href }) => (
                                <Link key={name} to={href} className='font-medium text-lg text-text hover:underline'>
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
