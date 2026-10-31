import {
    Children,
    cloneElement,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useId,
    useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    defaultActiveIndex?: number;
    activeIndex?: number;
    hasAnimation?: boolean;
    className?: string;
    onActiveIndexChange?: (index: number) => void;
}

export const TabsWrapper = forwardRef<HTMLDivElement, Props>(
    (
        { defaultActiveIndex = 0, activeIndex, hasAnimation = false, className = '', onActiveIndexChange, ...props },
        ref
    ) => {
        const [internalActiveIndex, setInternalActiveIndex] = useState(activeIndex ?? defaultActiveIndex);
        const tabsId = useId();

        useEffect(() => {
            if (activeIndex !== undefined) {
                setInternalActiveIndex(activeIndex);
            }
        }, [activeIndex]);

        const handleActiveIndexChange = (index: number) => {
            setInternalActiveIndex(index);
            onActiveIndexChange?.(index);
        };

        return (
            <div ref={ref} {...props} className={cn('border-border relative w-full rounded-md border', className)}>
                {Children.map(props.children, (child) => {
                    return isValidElement(child)
                        ? cloneElement(child as ReactElement<Record<string, unknown>>, {
                              tabsId,
                              hasAnimation,
                              activeIndex: internalActiveIndex,
                              setActiveIndex: handleActiveIndexChange
                          })
                        : child;
                })}
            </div>
        );
    }
);
