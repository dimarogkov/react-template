import { PATHS } from '../../variables/paths';
import { EnumText } from '../../types/enums';
import { ProjectInfo } from '../elements';
import { BtnLink, Line, Text, Title } from '../ui';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='w-full mb-5 last:mb-0'>
                <Title className='mb-2 last:mb-0'>Home Page</Title>

                <Text textType={EnumText.large} className='mb-3 last:mb-0'>
                    Navigation to other Pages.
                </Text>

                <div className='flex flex-wrap gap-2 w-full'>
                    <BtnLink href={PATHS.UI}>UI Page</BtnLink>
                    <BtnLink href={PATHS.STORE}>Store Page</BtnLink>
                    <BtnLink href={PATHS.FORM}>Form Page</BtnLink>
                    <BtnLink href={PATHS.TODOS}>Todos Page</BtnLink>
                    <BtnLink href={PATHS.THEME}>Theme Page</BtnLink>
                </div>
            </div>

            <Line />
            <ProjectInfo className='md:w-[50%]' />
        </section>
    );
};
