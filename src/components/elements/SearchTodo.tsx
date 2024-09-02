/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';
import { debounce } from '../../helpers/debounce';
import { Input } from '../ui';

type Props = {
    setAppliedSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchTodo: React.FC<Props> = ({ setAppliedSearchValue }) => {
    const [value, setValue] = useState('');

    const applySearchValue = useCallback(debounce(setAppliedSearchValue, 700), []);

    const handleSearch = (value: string) => {
        applySearchValue(value);
        setValue(value);
    };

    return (
        <div className='relative w-full mb-3 last:mb-0s'>
            <Input
                name='search'
                placeholder='Find Todo'
                value={value}
                onChange={({ target }) => handleSearch(target.value)}
            />
        </div>
    );
};
