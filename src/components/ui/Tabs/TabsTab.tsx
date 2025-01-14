import { Dispatch, FC, forwardRef, LiHTMLAttributes, RefAttributes, SetStateAction, useEffect } from 'react';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
    tabIndex?: number;
    activeIndex?: number;
    isActive?: boolean;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsTab: FC<Props> = forwardRef<HTMLLIElement, Props>(
    ({ tabIndex = 0, activeIndex, isActive, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        useEffect(() => {
            isActive && setActiveIndex(tabIndex);
        }, [isActive, setActiveIndex, tabIndex]);

        return (
            <li
                ref={ref}
                {...props}
                onClick={() => setActiveIndex(tabIndex)}
                className={cn(`relative px-3 py-1.5 rounded-t-md border border-b-0 cursor-pointer ${className}`, {
                    'active-tab border-gray': tabIndex === activeIndex,
                    'border-transparent': tabIndex !== activeIndex,
                })}
            >
                {props.children}
            </li>
        );
    }
);
