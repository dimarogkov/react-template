import { useMutation, useQuery } from '@tanstack/react-query';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../services';

export const useTodo = () => {
    const {
        data: todos,
        refetch,
        isLoading,
    } = useQuery({
        queryFn: () => getTodos(),
        select: (data) => data.data.slice(data.data.length - 6),
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
};
