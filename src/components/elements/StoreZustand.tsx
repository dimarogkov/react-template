import { FC } from 'react';
import { useCount } from '../../store/zustand';
import { Btn, Text, Title } from '../ui';
import { RotateCcw } from 'lucide-react';

type Props = {
    className?: string;
};

export const StoreZustand: FC<Props> = ({ className = '' }) => {
    const { count, addCount, removeCount, resetCount } = useCount((state) => state);

    return (
        <div className={`w-full ${className}`}>
            <Title size='h3' className='mb-5 last:mb-0'>
                Store with Zustand
            </Title>

            <Text size='large' className='font-medium text-title mb-2 last:mb-0'>
                {count}
            </Text>

            <div className='flex flex-col sm:flex-row w-full gap-2'>
                <Btn onClick={() => removeCount(5)}>- 5</Btn>
                <Btn onClick={() => addCount(5)}>+ 5</Btn>

                <Btn onClick={() => resetCount()}>
                    <RotateCcw className='size-5' />
                    <span>Reset</span>
                </Btn>
            </div>
        </div>
    );
};
