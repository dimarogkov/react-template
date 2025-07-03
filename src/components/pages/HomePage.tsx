import { DEV_ICONS, PATHS } from '../../variables';
import { DevIcon } from '../elements';
import { Aurora } from '../other';
import { Btn, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

export const HomePage = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;

    return (
        <section className='relative w-full sm:h-[calc(100svh-64px)] min-h-[calc(100svh-64px)] lg:h-[calc(100svh-80px)] lg:min-h-[calc(100svh-80px)] py-7 md:py-10'>
            <div className='absolute top-0 left-0 w-full h-full rotate-180'>
                <Aurora colorStops={['#facc15', '#ff94b4', '#ff6467']} blend={0.5} amplitude={1.0} speed={0.3} />
            </div>

            <div className='container relative'>
                <div className='flex flex-col gap-5 w-full mb-8 last:mb-0'>
                    <Title size='h2' className='mb-1.5 last:mb-0'>
                        Build Faster with React Template
                    </Title>

                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full'>
                        {DEV_ICONS.map((icon, text) => (
                            <DevIcon key={text} devIcon={icon} />
                        ))}
                    </div>

                    <Text size='large' className='text-title'>
                        A curated set of accessible, ready-to-use components for modern web apps. Designed to save you
                        time and help you create stunning UIs effortlessly.
                    </Text>

                    <div className='flex flex-wrap gap-2 w-full'>
                        <Btn isLink>
                            <Btn.Link href={`${MAIN.COMPONENTS}${COMPONENTS.ACCORDION}`}>Get Started</Btn.Link>
                        </Btn>

                        <Btn variant='outline' isLink>
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
