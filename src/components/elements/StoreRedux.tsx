import { useAppDispatch, useAppSelector } from '../../storeRedux';
import { addCount, removeCount, resetCount } from '../../storeRedux/countReducer';
import { Btn, Subtitle, Text } from '../ui';

type Props = {
    className?: string;
};

export const StoreRedux: React.FC<Props> = ({ className = '' }) => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <div className={`w-full ${className}`}>
            <Subtitle className='mb-5 last:mb-0'>Store with Redux</Subtitle>
            <Text className='mb-2 last:mb-0'>{count}</Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>
                <Btn onClick={() => dispatch(resetCount())}>Reset</Btn>
            </div>
        </div>
    );
};
