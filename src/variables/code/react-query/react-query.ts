export const REACT_QUERY_CODE = `import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services';

export const useTodo = () => {
    const {
        data: todos,
        refetch,
        isLoading,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (data) => data.data,
        queryKey: ['todos'],
    });

    const { mutate: createTodoMutation, isPending: isPendingCreateTodo } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: updateTodoMutation, isPending: isPendingUpdateTodo } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation, isPending: isPendingRemoveTodo } = useMutation({
        mutationFn: deleteTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    return {
        todos,
        isLoading,
        createTodoMutation,
        isPendingCreateTodo,
        updateTodoMutation,
        isPendingUpdateTodo,
        removeTodoMutation,
        isPendingRemoveTodo,
    };
};`;

export const REACT_QUERY_TYPE_CODE = `export interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}`;

export const REACT_QUERY_ADD_TODO_CODE = `import { FC, useState } from 'react';
import { Btn, Input } from '../ui';

type Props = {
	isPending: boolean;
	addTodo: (title: string) => void;
};

export const AddTodo: FC<Props> = ({ isPending, addTodo = () => {} }) => {
	const [todoTitle, setTodoTitle] = useState('');

	const handleAddTodo = () => {
		addTodo(todoTitle);
		setTodoTitle('');
	};

	return (
		<div className='flex flex-wrap w-full gap-2.5'>
			<Input
				name='search'
				placeholder='Add Todo'
				disabled={isPending}
				value={todoTitle}
				onChange={({ target }) => setTodoTitle(target.value)}
			/>

			<Btn disabled={todoTitle.length === 0 || isPending} onClick={handleAddTodo}>
				{isPending ? 'Loading...' : 'Add todo'}
			</Btn>
		</div>
	);
};`;

export const REACT_QUERY_TODO_CODE = `import { FC } from 'react';
import { AxiosResponse } from 'axios';
import { UseMutateFunction } from '@tanstack/react-query';
import { ITodo } from '../../types/interfaces/Todo';
import { Btn, Text, Title } from '../ui';
import { X } from 'lucide-react';
import cn from 'classnames';

type Props = {
    todo: ITodo;
    isPending: boolean;
    updateTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, ITodo, unknown>;
    removeTodo: UseMutateFunction<AxiosResponse<ITodo, any>, Error, number, unknown>;
};

export const Todo: FC<Props> = ({ todo, isPending, updateTodo = () => {}, removeTodo = () => {} }) => {
    const { id, title, userId, completed } = todo;

    return (
        <div
            className={cn('relative flex flex-col w-full rounded-md border p-4 transition-opacity duration-300', {
                'border-border': !completed,
                'border-green bg-green/10': completed,
                'opacity-70 pointer-events-none': isPending,
            })}
        >
            <button
                type='button'
                onClick={() => removeTodo(id)}
                className='absolute top-1.5 right-1.5 outline-none transition-opacity duration-300 hover:opacity-65'
            >
                <X className='size-5' />
            </button>

            <div className='flex-grow w-full pr-8 mb-5 last:mb-0'>
                <Title size='h4' className='truncate mb-1 last:mb-0'>
                    {title}
                </Title>

                <Text>User ID - {userId}</Text>
            </div>

            <Btn variant='secondary' onClick={() => updateTodo(todo)} className='sm:!w-full'>
                {completed ? 'Uncomplete' : 'Complete'}
            </Btn>
        </div>
    );
};`;
