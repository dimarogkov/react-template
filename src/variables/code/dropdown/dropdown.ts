export const DROPDOWN_CODE = `import { DropdownWrapper } from './DropdownWrapper';
import { DropdownTrigger } from './DropdownTrigger';
import { DropdownContent } from './DropdownContent';

export const Dropdown = Object.assign(DropdownWrapper, {
    Trigger: DropdownTrigger,
    Content: DropdownContent,
});`;

export const DROPDOWN_WRAPPER_CODE = `import {
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

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
}

export const DropdownWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen = false, className = '', ...props }, ref) => {
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            setIsDropdownOpen(isOpen);
        }, [isOpen]);

        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
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
            <div ref={ref || dropdownRef} {...props} className={\`relative \${className}\`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            isOpen: isDropdownOpen,
                            setIsOpen: setIsDropdownOpen,
                        });
                    }

                    return child;
                })}
            </div>
        );
    }
);`;

export const DROPDOWN_TRIGGER_CODE = `import {
	Dispatch,
	FC,
	forwardRef,
	HTMLAttributes,
	RefAttributes,
	SetStateAction
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownTrigger: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ isOpen, className = '', setIsOpen = () => {}, ...props }, ref) => {
        return (
            <div
                ref={ref}
                {...props}
                onClick={() => setIsOpen((prevState) => !prevState)}
                className={\`relative cursor-pointer list-none \${className}\`}
            />
        );
    }
);`;

export const DROPDOWN_CONTENT_CODE = `import {
	Dispatch,
	FC,
	forwardRef,
	RefAttributes,
	SetStateAction
} from 'react';
import { AnimatePresence, HTMLMotionProps, motion } from 'framer-motion';
import { EnumDropdownAlign, EnumDropdownPosition } from '../../../types/enums';
import cn from 'classnames';

interface Props extends HTMLMotionProps<'div'>, RefAttributes<HTMLDivElement> {
    align?: EnumDropdownAlign;
    position?: EnumDropdownPosition;
    isOpen?: boolean;
    className?: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export const DropdownContent: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        {
            align = EnumDropdownAlign.start,
            position = EnumDropdownPosition.bottom,
            isOpen,
            className = '',
            setIsOpen = () => {},
            ...props
        },
        ref
    ) => {
        const isVerticalPosition = position === EnumDropdownPosition.top || position === EnumDropdownPosition.bottom;
        const isHorizontalPosition = position === EnumDropdownPosition.left || position === EnumDropdownPosition.right;

        const animation: HTMLMotionProps<'div'> = {
            initial: { scale: 0.95, opacity: 0 },
            animate: { scale: 1, opacity: 1, transition: { ease: [0.215, 0.61, 0.355, 1] } },
            exit: { scale: 0.95, opacity: 0 },
        };

        const dropdownContentStyle = {
            ...(position === EnumDropdownPosition.top && {
                bottom: 'calc(100% + 4px)',
                transformOrigin: 'bottom left',
            }),
            ...(position === EnumDropdownPosition.right && {
                left: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === EnumDropdownPosition.bottom && {
                top: 'calc(100% + 4px)',
                transformOrigin: 'top left',
            }),
            ...(position === EnumDropdownPosition.left && {
                right: 'calc(100% + 4px)',
                transformOrigin: 'top right',
            }),
        };

        return (
            <AnimatePresence mode='wait'>
                {isOpen && (
                    <motion.div
                        ref={ref}
                        {...props}
                        {...animation}
                        className={cn(
                            \`absolute z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-2 border border-border bg-bg will-change-transform \${className}\`,
                            {
                                'left-0': align === EnumDropdownAlign.start && isVerticalPosition,
                                'top-0': align === EnumDropdownAlign.start && isHorizontalPosition,
                                'right-0': align === EnumDropdownAlign.end && isVerticalPosition,
                                'bottom-0': align === EnumDropdownAlign.end && isHorizontalPosition,
                            }
                        )}
                        style={dropdownContentStyle}
                    >
                        {props.children}
                    </motion.div>
                )}
            </AnimatePresence>
        );
    }
);`;
