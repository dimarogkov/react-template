import { PATHS } from '../../variables';
import { EnumTitle } from '../../types/enums';
import { Btn, Text, Title } from '../ui';
import { ArrowUpRight } from 'lucide-react';

export const NotFoundPage = () => {
    return (
        <section className='relative flex items-center w-full h-[calc(100svh-104px)] lg:h-[calc(100svh-120px)] pb-16 lg:pb-20'>
            <div className='container'>
                <div className='w-full text-center'>
                    <Title titleType={EnumTitle.h2} className='mb-1 last:mb-0'>
                        Ooops! Page Not Found
                    </Title>
                    <Text className='mb-5 last:mb-0'>
                        This page doesn’t exist or was removed! We suggest you go back to home.
                    </Text>

                    <Btn isLink className='m-auto'>
                        <Btn.Link href={PATHS.HOME}>
                            <span>Go Home</span>
                            <ArrowUpRight className='size-5' />
                        </Btn.Link>
                    </Btn>
                </div>
            </div>
        </section>
    );
};
