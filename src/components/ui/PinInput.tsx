import { FC, forwardRef, HTMLAttributes, RefAttributes, KeyboardEvent, useCallback, useRef, useState } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    length?: number;
    className?: string;
    onComplete?: (pin: string) => void;
}

export const PinInput: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ length = 4, className = '', onComplete = () => {}, ...props }, ref) => {
        const [values, setValues] = useState<string[]>(Array(length).fill(''));
        const inputsRef = useRef<HTMLInputElement[]>([]);

        const setInputRef = useCallback((el: HTMLInputElement | null, index: number) => {
            if (el) {
                inputsRef.current[index] = el;
            }
        }, []);

        const handleChange = (value: string, index: number) => {
            if (/^\d?$/.test(value)) {
                const newValues = [...values];
                newValues[index] = value;
                setValues(newValues);

                if (value && index < 3) {
                    inputsRef.current[index + 1]?.focus();
                }

                if (newValues.every((v) => v !== '')) {
                    onComplete(newValues.join(''));
                }
            }
        };

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
            if (e.key === 'Backspace' && !values[index] && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        };

        return (
            <div ref={ref} {...props} className={`relative flex gap-2.5 w-fit ${className}`}>
                {values.map((value, i) => (
                    <input
                        key={i}
                        ref={(el) => setInputRef(el, i)}
                        type='text'
                        inputMode='numeric'
                        maxLength={1}
                        value={value}
                        onChange={({ target }) => handleChange(target.value, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        className='size-12 text-center text-xl text-title rounded-md border border-border bg-border outline-none transition-all duration-300 focus:border-text placeholder:text-text'
                        required
                    />
                ))}
            </div>
        );
    }
);
