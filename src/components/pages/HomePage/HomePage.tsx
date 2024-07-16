import { Form } from '../../elements/Form';
import { Line } from '../../elements/Line';
import { Store } from '../../elements/Store';
import { BtnLink, Text, Title } from '../../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Text className='mb-3 last:mb-0'>This is Home Page.</Text>
                <BtnLink href='/todos'>Todos Page</BtnLink>
            </div>

            <Line />
            <Store />
            <Line />
            <Form />
        </section>
    );
};
