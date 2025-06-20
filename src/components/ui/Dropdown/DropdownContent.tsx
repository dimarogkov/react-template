import { Dispatch, FC, forwardRef, RefAttributes, SetStateAction } from 'react';
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
            initial: { y: 10, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.215, 0.61, 0.355, 1] } },
            exit: { y: -5, opacity: 0 },
        };

        const dropdownContentStyle = {
            ...(position === EnumDropdownPosition.top && {
                bottom: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.right && {
                left: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.bottom && {
                top: 'calc(100% + 4px)',
            }),
            ...(position === EnumDropdownPosition.left && {
                right: 'calc(100% + 4px)',
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
                            `absolute z-10 min-w-full max-w-[calc(100vw-32px)] w-max rounded-md p-2.5 border border-border bg-bg ${className}`,
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
);
