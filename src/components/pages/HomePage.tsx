import { PATHS } from '../../variables/paths';
import { BtnLink, Text, Title } from '../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Text className='mb-3 last:mb-0'>This is Home Page.</Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href={PATHS.UI}>UI Page</BtnLink>
                    <BtnLink href={PATHS.STORE}>Store Page</BtnLink>
                    <BtnLink href={PATHS.FORM}>Form Page</BtnLink>
                    <BtnLink href={PATHS.TODOS}>Todos Page</BtnLink>
                    <BtnLink href={PATHS.THEME}>Theme Page</BtnLink>
                </div>
            </div>
        </section>
    );
};
