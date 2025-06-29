import { StoreReduxToolkit, StoreZustand } from '../elements';
import { Badge, Separator, Title } from '../ui';

export const StorePage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex flex-wrap gap-2 w-full'>
                            <Badge>Redux Toolkit Store</Badge>
                            <Badge>Zustand Store</Badge>
                        </div>

                        <Title size='h2'>Redux Toolkit & Zustand Store</Title>
                    </div>

                    <Separator className='my-5' />

                    <div className='flex flex-col gap-10 w-full'>
                        <StoreReduxToolkit />
                        <StoreZustand />
                    </div>
                </div>
            </div>
        </section>
    );
};
