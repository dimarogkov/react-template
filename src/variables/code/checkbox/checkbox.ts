export const CHECKBOX_CODE = `import {
	FC,
	forwardRef,
	InputHTMLAttributes,
	RefAttributes, useEffect,
	useState
} from 'react';
import { Text } from './Text';
import { Check } from 'lucide-react';
import cn from 'classnames';

interface Props extends InputHTMLAttributes<HTMLInputElement>, RefAttributes<HTMLInputElement> {
    label?: string;
    isChecked?: boolean;
    className?: string;
}

export const Checkbox: FC<Props> = forwardRef<HTMLInputElement, Props>(
    ({ label, isChecked = false, className = '', ...props }, ref) => {
        const [isCheckboxActive, setIsCheckboxActive] = useState(false);

        useEffect(() => {
            setIsCheckboxActive(isChecked);
        }, [isChecked]);

        const toggleCheckbox = () => setIsCheckboxActive(!isCheckboxActive);

        return (
            <div
                className={cn(\`flex items-center gap-2 cursor-pointer select-none \${className}\`, {
                    'opacity-70 pointer-events-none': props.disabled,
                })}
            >
                <div className='relative size-5 min-w-5'>
                    <input
                        ref={ref}
                        {...props}
                        type='checkbox'
                        className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                        checked={isCheckboxActive}
                        onChange={toggleCheckbox}
                    />

                    <span
                        className={cn(
                            'flex items-center justify-center w-full h-full bg-transparent rounded-md border',
                            {
                                'border-border': !isCheckboxActive,
                                'border-yellow bg-yellow': isCheckboxActive,
                            }
                        )}
                    >
                        <Check
                            className={cn('size-4 text-bg', {
                                'opacity-0 invisible': !isCheckboxActive,
                                'opacity-1 visible': isCheckboxActive,
                            })}
                        />
                    </span>
                </div>

                {label && <Text>{label}</Text>}
            </div>
        );
    }
);`;
