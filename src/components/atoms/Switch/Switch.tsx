import { ButtonHTMLAttributes, forwardRef, RefAttributes, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Text } from '@components/atoms';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    isActive?: boolean;
    label?: string;
    className?: string;
}

export const Switch = forwardRef<HTMLButtonElement, Props>(
    ({ isActive: isSwitchActive = false, label, className = '', ...props }, ref) => {
        const [isActive, setIsActive] = useState(isSwitchActive);

        useEffect(() => {
            setIsActive(isSwitchActive);
        }, [isSwitchActive]);

        const toggleSwitch = () => setIsActive((prevState) => !prevState);

        return (
            <label
                className={cn('flex w-fit cursor-pointer items-center gap-2 select-none', className, {
                    'pointer-events-none opacity-60': props.disabled
                })}
            >
                <button
                    ref={ref}
                    {...props}
                    type="button"
                    role="switch"
                    aria-checked={isActive}
                    onClick={toggleSwitch}
                    className={cn(
                        'relative flex h-6.5 w-12 cursor-pointer rounded-full border p-0.5 outline-hidden transition-colors duration-300',
                        {
                            'border-text justify-start': !isActive,
                            'border-title justify-end': isActive
                        }
                    )}
                >
                    <motion.span
                        layout
                        transition={{ type: 'spring', visualDuration: 0.3, bounce: 0.2 }}
                        className={cn('relative size-5 rounded-full transition-colors duration-300', {
                            'bg-title': isActive,
                            'bg-text': !isActive
                        })}
                    />
                </button>

                {label && <Text>{label}</Text>}
            </label>
        );
    }
);
