import { BtnLink, Text, Title } from '../../ui';

export const NotFoundPage = () => {
    return (
        <section className='relative w-full'>
            <Title className='mb-2 last:mb-0'>Ooops! Page Not Found</Title>

            <Text className='mb-5 last:mb-0'>
                This page doesn’t exist or was removed! We suggest you go back to home.
            </Text>

            <BtnLink href='/'>Go Back-Home</BtnLink>
        </section>
    );
};
