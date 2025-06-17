import { useMemo, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../services/todos';
import { EnumTitle } from '../../types/enums';
import { AddTodo, SearchTodo, Todo } from '../elements';
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
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full mb-5 last:mb-0'>
                        <Badge>
                            <Badge.Item>Axios</Badge.Item>
                            <Badge.Item>React Query</Badge.Item>
                            <Badge.Item>Debounce</Badge.Item>
                        </Badge>

                        <Title titleType={EnumTitle.h2}>Todos with React Query</Title>
                    </div>

                    <SearchTodo setAppliedSearchValue={setAppliedSearchValue} />

                    <AddTodo isPending={isPendingCreateTodo} addTodo={addTodo} />

                    {isLoading && <Text>Loading...</Text>}

                    {filteredTodos?.length === 0 && <Text>No todos found. Try searching again.</Text>}

                    {filteredTodos && (
                        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5 w-full'>
                            {filteredTodos.map((todo) => (
                                <Todo
                                    key={todo.id}
                                    todo={todo}
                                    isPending={isPendingUpdateTodo}
                                    updateTodo={updateTodoMutation}
                                    removeTodo={removeTodoMutation}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
