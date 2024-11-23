import {
    Children,
    cloneElement,
    Dispatch,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    SetStateAction,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    skipPropsToChildren?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, skipPropsToChildren = false, setIsOpen = () => {}, className = '', ...props }, ref) => {
        const changeIsOpen = () => setIsOpen((prevState) => !prevState);

        return (
            <div ref={ref} {...props} onClick={changeIsOpen} className={`relative w-full cursor-pointer ${className}`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child) && !skipPropsToChildren) {
                        return cloneElement(child as ReactElement, { isOpen });
                    }

                    return child;
                })}
            </div>
        );
    }
);
