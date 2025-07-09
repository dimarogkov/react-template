import { FC, useState } from 'react';
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
};
