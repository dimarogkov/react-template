import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { DropdownTrigger } from './DropdownTrigger';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const DropdownWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);
        const dropdownRef = useRef<HTMLDivElement>(null);

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                console.log('handleClickOutside');
                setIsDropdownOpen(false);
            }
        };

        useEffect(() => {
            document.addEventListener('click', handleClickOutside, true);

            return () => {
                document.removeEventListener('click', handleClickOutside, true);
            };
        }, []);

        return (
            <div ref={dropdownRef || ref} {...props} className={`relative w-auto ${className}`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            ...(child.type === DropdownTrigger
                                ? { isOpen: isDropdownOpen, setIsOpen: setIsDropdownOpen }
                                : { isOpen: isDropdownOpen, setIsOpen: setIsDropdownOpen }),
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);
