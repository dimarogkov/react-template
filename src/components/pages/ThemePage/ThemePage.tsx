import { ThemeController } from '../../elements/ThemeController';
import { Badge, BtnLink, Line, Subtitle, Text, Title } from '../../ui';

export const ThemePage = () => {
    return (
        <section className='relative w-full mb-10 last:mb-0'>
            <div className='w-full'>
                <BtnLink href='/' className='mb-6 last:mb-0'>
                    Back
                </BtnLink>

                <div className='flex gap-2 mb-3 last:mb-0'>
                    <Badge>Next Themes</Badge>
                </div>

                <Title>React Theme</Title>
            </div>

            <Line />

            <div className='w-full'>
                <ThemeController className='mb-5 last:mb-0' />

                <div className='w-full rounded p-4 border-2 border-black dark:border-gray bg-white dark:bg-black'>
                    <Subtitle className='text-black dark:text-gray'>Some Subtitle</Subtitle>
                    <Text className='text-black dark:text-gray'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In nihil cupiditate magnam mollitia,
                        consectetur assumenda non? Delectus, fugiat tempore reiciendis, quam quibusdam labore rerum
                        distinctio cum vel quo nihil possimus!
                    </Text>
                </div>
            </div>
        </section>
    );
};