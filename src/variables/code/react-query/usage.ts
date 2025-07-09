export const REACT_QUERY_USAGE_CODE = `import { useTodo } from '../../../hooks';
import { AddTodo } from '../AddTodo';
import { Todo } from '../Todo';
import { Loader, Title } from '../../ui';

export const ReactQueryPreview = () => {
	const {
		todos,
		isLoading,
		createTodoMutation,
		isPendingCreateTodo,
		updateTodoMutation,
		isPendingUpdateTodo,
		removeTodoMutation,
		isPendingRemoveTodo,
	} = useTodo();

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
		<div className='relative w-full'>
			<div className='w-full mb-5 last:mb-0'>
				<Title size='h3' className='mb-2.5 last:mb-0'>
					Todo List
				</Title>

				<AddTodo isPending={isPendingCreateTodo} addTodo={addTodo} />
			</div>

			{isLoading && (
				<div className='relative flex items-center justify-center w-full h-24'>
					<Loader />
				</div>
			)}

			{todos && (
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2.5 w-full'>
					{todos.map((todo) => (
						<Todo
							key={todo.id}
							todo={todo}
							isPending={isPendingUpdateTodo || isPendingRemoveTodo}
							updateTodo={updateTodoMutation}
							removeTodo={removeTodoMutation}
						/>
					))}
				</div>
			)}
		</div>
	);
};`;

export const REACT_QUERY_PROVIDER_USAGE_CODE = `import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
	<App />
</QueryClientProvider>`;
