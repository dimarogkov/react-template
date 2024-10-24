import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../services/todos';

import { AddTodo, BackLink, SearchTodo, Todo } from '../elements';
import { Badge, Text, Title } from '../ui';

export const TodosPage = () => {
    const [appliedSearchValue, setAppliedSearchValue] = useState('');

    const {
        data: todos,
        refetch,
        isLoading,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (date) => date.data.slice(0, 12),
        queryKey: ['todos'],
    });

    const { mutate: updateTodoMutation, isPending: isPendingUpdateTodo } = useMutation({
        mutationFn: updateTodo,
        mutationKey: ['update todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: createTodoMutation, isPending: isPendingCreateTodo } = useMutation({
        mutationFn: createTodo,
        mutationKey: ['create todo'],
        onSuccess: () => refetch(),
    });

    const { mutate: removeTodoMutation } = useMutation({
        mutationFn: deleteTodo,
        mutationKey: ['remove todo'],
        onSuccess: () => refetch(),
    });

    const filteredTodos = useMemo(() => {
        if (todos) {
            let arr = [...todos];

            if (appliedSearchValue) {
                arr = arr.filter(({ title }) => title.toLowerCase().includes(appliedSearchValue.toLowerCase()));
            }

            return arr;
        }
    }, [appliedSearchValue, todos]);

    const addTodo = (title: string) => {
        if (title.trim() === '') {
            return;
        }

        const newTodo = {
            userId: 1,
            title: title.trim(),
            completed: false,
        };

        createTodoMutation(newTodo);
    };

    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <div className='w-full mb-5 last:mb-0'>
                    <BackLink className='mb-6 last:mb-0' />

                    <div className='flex gap-2 mb-5 last:mb-0'>
                        <Badge>Axios</Badge>
                        <Badge>React Query</Badge>
                        <Badge>Debounce</Badge>
                    </div>

                    <Title>Todos with React Query</Title>
                </div>

                <SearchTodo setAppliedSearchValue={setAppliedSearchValue} />

                <AddTodo isPending={isPendingCreateTodo} addTodo={addTodo} />

                {isLoading && <Text>Loading...</Text>}

                {filteredTodos?.length === 0 && <Text>No todos found. Try searching again.</Text>}

                {filteredTodos && (
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full'>
                        {filteredTodos.map((todo) => (
                            <Todo
                                todo={todo}
                                isPending={isPendingUpdateTodo}
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
