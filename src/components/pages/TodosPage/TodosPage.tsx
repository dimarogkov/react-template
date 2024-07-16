import { useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../../services/todos';

import { Todo } from '../../elements/Todo';
import { Btn, BtnLink, Input, Text, Title } from '../../ui';

export const TodosPage = () => {
    const [todoTitle, setTodoTitle] = useState('');

    const {
        data: todos,
        refetch,
        isLoading,
        isSuccess,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (date) => date.data.slice(0, 12),
        queryKey: ['todos'],
    });

    const { mutate: createTodoMutation, isPending: isPendingCreateTodo } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: updateTodoMutation } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    const addTodo = () => {
        if (todoTitle.trim() === '') {
            return;
        }

        const newTodo = {
            userId: 1,
            title: todoTitle.trim(),
            completed: false,
        };

        createTodoMutation(newTodo);
        setTodoTitle('');
    };

    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <div className='w-full mb-5 last:mb-0'>
                    <BtnLink href='/' className='mb-5 last:mb-0'>
                        Back
                    </BtnLink>

                    <Title>Todos with React Query</Title>
                </div>

                <div className='flex flex-wrap w-full gap-3 mb-6 md:mb-8 last:mb-0'>
                    <Input
                        name='search'
                        placeholder='Add Todo'
                        disabled={isPendingCreateTodo}
                        value={todoTitle}
                        onChange={({ target }) => setTodoTitle(target.value)}
                    />
                    <Btn disabled={isPendingCreateTodo} onClick={addTodo}>
                        {isPendingCreateTodo ? 'Loading...' : 'Add todo'}
                    </Btn>
                </div>

                {isLoading && <Text>Loading...</Text>}

                {isSuccess && (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                        {todos.map((todo) => (
                            <Todo
                                todo={todo}
                                updateTodo={updateTodoMutation}
                                removeTodo={removeTodoMutation}
                                key={todo.id}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};
