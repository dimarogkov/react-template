import { Link } from 'react-router-dom';
import { getLinks } from '../../helpers';
import { Separator, Text, Title } from '../ui';

export const StorePage = () => {
    const { storeLinks } = getLinks();

    return (
        <>
            <section className='relative w-full'>
                <div className='container'>
                    <div className='w-full'>
                        <Title size='h2' className='mb-2 last:mb-0'>
                            Store
                        </Title>

                        <Text size='large'>
                            Here you can explore all the state management solutions included in this template. We are
                            continuously working on adding more integrations and improving existing ones.
                        </Text>

                        <Separator className='my-5' />

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full'>
                            {storeLinks.map(({ name, href }) => (
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
