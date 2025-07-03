import { FC } from 'react';
import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { ITodo } from '../../types/interfaces/Todo';
import { Btn, Text, Title } from '../ui';
import { Trash2 } from 'lucide-react';
import cn from 'classnames';

type Props = {
    todo: ITodo;
    isPending: boolean;
    updateTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, ITodo, unknown>;
    removeTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, number, unknown>;
};

export const Todo: FC<Props> = ({ todo, isPending, updateTodo = () => {}, removeTodo = () => {} }) => {
    const { id, title, userId, completed } = todo;

    const toggleTodo = () => updateTodo(todo);

    return (
        <div
            className={cn('relative flex flex-col w-full rounded-md border p-4 transition-opacity duration-300', {
                'border-border': !completed,
                'border-green bg-green/10': completed,
                'opacity-70 pointer-events-none': isPending,
            })}
        >
            <button
                className='absolute z-10 top-2 right-2 flex items-center justify-center size-7 rounded-md border border-red bg-red/15 outline-none transition-opacity duration-300 hover:opacity-70'
                onClick={() => removeTodo(id)}
            >
                <Trash2 className='size-4 text-red' />
            </button>

            <div className='flex-grow w-full pr-8 mb-5 last:mb-0'>
                <Title size='h4' className='truncate mb-1 last:mb-0'>
                    {title}
                </Title>

                <Text>User ID - {userId}</Text>
            </div>

            <Btn variant='secondary' onClick={toggleTodo} className='sm:!w-full'>
                {completed ? 'Uncomplete Todo' : 'Complete Todo'}
            </Btn>
        </div>
    );
};
