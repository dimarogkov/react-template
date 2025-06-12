import { DEV_ICONS } from '../../variables';
import { EnumText, EnumTitle } from '../../types/enums';
import { DevIcon } from '../elements/DevIcon';
import { BtnLink, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-4 w-full mb-8 last:mb-0'>
                        <Title titleType={EnumTitle.h2}>React Template</Title>

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 w-full'>
                            {DEV_ICONS.map((icon, text) => (
                                <DevIcon key={text} devIcon={icon} />
                            ))}
                        </div>

                        <Text textType={EnumText.large}>
                            This is React Template for development. Technolgies used: React.js, TypeScript, Tailwind
                            CSS, Redux Toolkit, Zustand, Axios, React Query, React Hook Form, Yup, Frame Motion.
                        </Text>

                        <BtnLink href='https://github.com/dimarogkov/react-template' target='_blank'>
                            <span>Git Repo</span>
                            <ArrowUpRight className='size-5' />
                        </BtnLink>
                    </div>
                </div>
            </div>
        </section>
    );
};
