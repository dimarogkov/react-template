import { EnumTitle } from '../../types/enums';
import { StoreRedux, StoreZustand } from '../elements';
import { Badge, Line, Title } from '../ui';

export const StorePage = () => {
    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full'>
                        <Badge>
                            <Badge.Item>Redux Store</Badge.Item>
                            <Badge.Item>Zustand Store</Badge.Item>
                        </Badge>

                        <Title titleType={EnumTitle.h2}>Redux & Zustand Store</Title>
                    </div>

                    <Line />

                    <div className='flex flex-col gap-10 w-full'>
                        <StoreRedux />
                        <StoreZustand />
                    </div>
                </div>
            </div>
        </section>
    );
};
