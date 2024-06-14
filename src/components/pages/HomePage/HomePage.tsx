import { Form } from '../../elements/Form';
import { Store } from '../../elements/Store';
import { Text, Title } from '../../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-[20px] last:mb-0'>
                <Title className='mb-[8px] last:mb-0'>Home Page</Title>
                <Text>This is Home Page.</Text>
            </div>

            <Store />
            <Form />
        </section>
    );
};
