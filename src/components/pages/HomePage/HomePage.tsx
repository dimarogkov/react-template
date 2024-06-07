import { useAppDispatch, useAppSelector } from '../../../store';
import { actions } from '../../../store/countReducer';

import { Btn } from '../../ui/Btn';
import { Content } from '../../ui/Content';
import { Title } from '../../ui/Title';

export const HomePage = () => {
    const count = useAppSelector((state) => state.count.count);
    const dispatch = useAppDispatch();

    return (
        <section className='relative w-full'>
            <div className='w-full mb-[20px] last:mb-0'>
                <Title className='mb-[8px] last:mb-0'>Home Page</Title>
                <Content>This is Home Page.</Content>
            </div>

            <div className='w-full'>
                <Content className='mb-[8px] last:mb-0'>{count}</Content>

                <div className='flex flex-col sm:flex-row w-full gap-[8px]'>
                    <Btn onClick={() => dispatch(actions.removeCount(5))}>- 5</Btn>
                    <Btn onClick={() => dispatch(actions.addCount(5))}>+ 5</Btn>
                    <Btn onClick={() => dispatch(actions.resetCount())}>Reset</Btn>
                </div>
            </div>
        </section>
    );
};
