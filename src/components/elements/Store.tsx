import { StoreRedux } from './StoreRedux';
import { StoreZustand } from './StoreZustand';

export const Store = () => {
    return (
        <div className='w-full mb-10 last:mb-0'>
            <StoreRedux className='mb-10 last:mb-0' />
            <StoreZustand />
        </div>
    );
};
