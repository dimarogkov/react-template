import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux';
import { addCount, removeCount, resetCount } from '../../store/redux/countReducer';
import { Btn, Text, Title } from '../ui';
import { RotateCcw } from 'lucide-react';

type Props = {
    className?: string;
};

export const StoreReduxToolkit: FC<Props> = ({ className = '' }) => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <div className={`w-full ${className}`}>
            <Title size='h3' className='mb-5 last:mb-0'>
                Store with Redux
            </Title>

            <Text size='large' className='font-medium text-title mb-2 last:mb-0'>
                {count}
            </Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => dispatch(removeCount(5))}>- 5</Btn>
                <Btn onClick={() => dispatch(addCount(5))}>+ 5</Btn>

                <Btn onClick={() => dispatch(resetCount())}>
                    <RotateCcw className='size-5' />
                    <span>Reset</span>
                </Btn>
            </div>
        </div>
    );
};
