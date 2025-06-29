import { DEV_ICONS } from '../../variables';
import { DevIcon } from '../elements/DevIcon';
import { Btn, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

export const HomePage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full mb-8 last:mb-0'>
                        <Title size='h2'>React Template</Title>

                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full'>
                            {DEV_ICONS.map((icon, text) => (
                                <DevIcon key={text} devIcon={icon} />
                            ))}
                        </div>

                        <Text size='large'>
                            This is React Template for development. Technolgies used: React, TypeScript, Tailwind CSS,
                            Redux Toolkit, Zustand, Axios, React Query, React Hook Form, Yup, Frame Motion.
                        </Text>

                        <Btn isLink>
                            <Btn.Link href='https://github.com/dimarogkov/react-template' target='_blank'>
                                <span>Git Repo</span>
                                <ArrowUpRight className='size-5' />
                            </Btn.Link>
                        </Btn>
                    </div>
                </div>
            </div>
        </section>
    );
};
