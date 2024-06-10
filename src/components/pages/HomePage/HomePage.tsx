import { Form } from '../../elements/Form';
import { Store } from '../../elements/Store';

import { Content } from '../../ui/Content';
import { Title } from '../../ui/Title';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-[20px] last:mb-0'>
                <Title className='mb-[8px] last:mb-0'>Home Page</Title>
                <Content>This is Home Page.</Content>
            </div>

            <Store />
            <Form />
        </section>
    );
};
