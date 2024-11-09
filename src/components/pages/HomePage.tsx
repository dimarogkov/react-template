import { PATHS } from '../../variables/paths';
import { Badge, StoreRedux, StoreZustand } from '../elements';
import { BtnLink, Line, Text, Title } from '../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Badge className='mb-5 last:mb-0'>
                    <Badge.Item>Redux Store</Badge.Item>
                    <Badge.Item>Redux Store</Badge.Item>
                </Badge>

                <Title className='mb-2 last:mb-0'>Home Page</Title>
                <Text className='mb-3 last:mb-0'>This is Home Page.</Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href={PATHS.FORM}>Form Page</BtnLink>
                    <BtnLink href={PATHS.TODOS}>Todos Page</BtnLink>
                    <BtnLink href={PATHS.THEME}>Theme Page</BtnLink>
                </div>
            </div>

            <Line />

            <div className='w-full mb-10 last:mb-0'>
                <StoreRedux className='mb-10 last:mb-0' />
                <StoreZustand />
            </div>
        </section>
    );
};
