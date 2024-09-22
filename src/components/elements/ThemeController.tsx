import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

type Props = {
    className?: string;
};

export const ThemeController: React.FC<Props> = ({ className = '' }) => {
    const { resolvedTheme, setTheme } = useTheme();

    const changeTheme = () => {
        resolvedTheme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <label className={`flex items-center cursor-pointer gap-x-3 ${className}`}>
            <Sun className='w-5 h-5 text-black' />

            <input
                type='checkbox'
                value='theme'
                checked={resolvedTheme === 'dark'}
                onChange={changeTheme}
                className='toggle theme-controller text-black border-black bg-black focus-visible:outline-none'
            />

            <Moon className='w-5 h-5 text-black' />
        </label>
    );
};
