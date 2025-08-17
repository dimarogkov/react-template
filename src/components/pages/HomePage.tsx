import { DEV_ICONS, PATHS } from '../../variables';
import { DevIcon, HomeBg } from '../elements';
import { Btn, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

export const HomePage = () => {
    const { MAIN } = PATHS.PAGES;

    return (
        <section className='relative flex items-center justify-center w-full sm:h-[calc(100svh-64px)] min-h-[calc(100svh-64px)] lg:h-[calc(100svh-80px)] lg:min-h-[calc(100svh-80px)] pb-16 lg:pb-20'>
            <HomeBg />

            <div className='relative container md:w-[800px]'>
                <div className='flex flex-col items-center w-full text-center'>
                    <Title className='mb-3 last:mb-0'>Build Faster with React Template</Title>

                    <div className='group flex space-x-2 w-full overflow-hidden mb-3 last:mb-0'>
                        <div className='flex space-x-2 animate-loop-scroll will-change-transform group-hover:paused'>
                            {DEV_ICONS.map((icon, text) => (
                                <DevIcon key={text} devIcon={icon} />
                            ))}
                        </div>

                        <div
                            className='flex space-x-2 animate-loop-scroll will-change-transform group-hover:paused'
                            aria-hidden={true}
                        >
                            {DEV_ICONS.map((icon, text) => (
                                <DevIcon key={text} devIcon={icon} />
                            ))}
                        </div>
                    </div>

                    <Text size='large' className='mb-7 last:mb-0'>
                        A curated set of accessible, ready-to-use components for modern web apps. Designed to save you
                        time and help you create stunning UIs effortlessly.
                    </Text>

                    <div className='flex flex-wrap justify-center gap-2 w-full'>
                        <Btn isLink>
                            <Btn.Link href={MAIN.DOCUMENTATION}>Get Started</Btn.Link>
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
