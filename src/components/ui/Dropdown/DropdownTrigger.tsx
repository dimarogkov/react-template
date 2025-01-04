import { Dispatch, FC, forwardRef, HTMLAttributes, MouseEvent, RefAttributes, SetStateAction } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, setIsOpen = () => {}, className = '', ...props }, ref) => {
        const changeIsOpen = (e: MouseEvent) => {
            e.preventDefault();
            setIsOpen((prevState) => !prevState);
        };

        return (
            <summary
                ref={ref}
                {...props}
                onClick={changeIsOpen}
                className={`relative w-auto cursor-pointer list-none ${className}`}
            />
        );
    }
);
