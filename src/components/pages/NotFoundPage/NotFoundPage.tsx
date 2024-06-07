import { BtnLink } from '../../ui/BtnLink';
import { Content } from '../../ui/Content';
import { Title } from '../../ui/Title';

export const NotFoundPage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-[8px] last:mb-0'>Ooops! Page Not Found</Title>
            <Content className='mb-[20px] last:mb-0'>
                This page doesn’t exist or was removed! We suggest you go back to home.
            </Content>
            <BtnLink href='/'>Go Back-Home</BtnLink>
        </section>
    );
};
