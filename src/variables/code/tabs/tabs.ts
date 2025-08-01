export const TABS_CODE = `import { TabsWrapper } from './TabsWrapper';
import { TabsList } from './TabsList';
import { TabsTab } from './TabsTab';
import { TabsPanels } from './TabsPanels';
import { TabsPanel } from './TabsPanel';

export const Tabs = Object.assign(TabsWrapper, {
    TabList: TabsList,
    Tab: TabsTab,
    Panels: TabsPanels,
    Panel: TabsPanel,
});`;

export const TABS_WRAPPER_CODE = `import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useState,
} from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

export const TabsWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation = false, className = '', ...props }, ref) => {
        const [activeIndex, setActiveIndex] = useState(0);

        return (
            <div ref={ref} {...props} className={\`relative w-full rounded-md border border-border \${className}\`}>
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { hasAnimation, activeIndex, setActiveIndex });
                    }

                    return child;
                })}
            </div>
        );
    }
);`;

export const TABS_LIST_CODE = `import {
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

interface Props extends HTMLAttributes<HTMLUListElement>, RefAttributes<HTMLUListElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsList: FC<Props> = forwardRef<HTMLUListElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        return (
            <ul ref={ref} {...props} className={\`relative flex w-full border-b border-border \${className}\`}>
                {Children.map(props.children, (child, index) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, {
                            hasAnimation,
                            tabIndex: index,
                            activeIndex,
                            setActiveIndex,
                        });
                    }

                    return child;
                })}
            </ul>
        );
    }
);`;

export const TABS_TAB_CODE = `import { Dispatch, FC, forwardRef, LiHTMLAttributes, RefAttributes, SetStateAction, useEffect } from 'react';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface Props extends LiHTMLAttributes<HTMLLIElement>, RefAttributes<HTMLLIElement> {
    hasAnimation?: boolean;
    tabIndex?: number;
    activeIndex?: number;
    isActive?: boolean;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsTab: FC<Props> = forwardRef<HTMLLIElement, Props>(
    (
        { hasAnimation, tabIndex = 0, activeIndex, isActive, className = '', setActiveIndex = () => {}, ...props },
        ref
    ) => {
        useEffect(() => {
            isActive && setActiveIndex(tabIndex);
        }, [isActive, setActiveIndex, tabIndex]);

        return (
            <li
                ref={ref}
                {...props}
                onClick={() => setActiveIndex(tabIndex)}
                className={cn(
                    \`relative w-full text-center text-base px-2.5 sm:px-3 py-1.5 border-r border-border last:border-none cursor-pointer \${className}\`,
                    {
                        'transition-colors duration-200': hasAnimation,
                        'text-title': tabIndex === activeIndex,
                    }
                )}
            >
                {props.children}

                {tabIndex === activeIndex && (
                    <>
                        {hasAnimation ? (
                            <motion.div
                                id='underline'
                                layoutId='underline'
                                className='absolute left-0 -bottom-[1px] w-full h-0.5 bg-title'
                            />
                        ) : (
                            <div className='absolute left-0 -bottom-[1px] w-full h-0.5 bg-title' />
                        )}
                    </>
                )}
            </li>
        );
    }
);`;

export const TABS_PANELS_CODE = `import {
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
import { AnimatePresence } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    activeIndex?: number;
    className?: string;
    setActiveIndex?: Dispatch<SetStateAction<number>>;
}

export const TabsPanels: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation, activeIndex, className = '', setActiveIndex = () => {}, ...props }, ref) => {
        const childrenToRender = Children.map(props.children, (child, index) => {
            if (index === activeIndex) {
                if (isValidElement(child)) {
                    return cloneElement(child as ReactElement, { hasAnimation });
                }

                return child;
            }
        });

        return (
            <div ref={ref} {...props} className={\`relative w-full \${className}\`}>
                {hasAnimation ? (
                    <AnimatePresence mode='wait' initial={false}>
                        {childrenToRender}
                    </AnimatePresence>
                ) : (
                    <>{childrenToRender}</>
                )}
            </div>
        );
    }
);`;

export const TABS_PANEL_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    hasAnimation?: boolean;
    className?: string;
}

export const TabsPanel: FC<Props> = forwardRef<HTMLDivElement, Props>(
    ({ hasAnimation, className = '', ...props }, ref) => {
        const animation: HTMLMotionProps<'div'> = {
            initial: { y: 8, opacity: 0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.2 } },
            exit: { y: -8, opacity: 0 },
        };

        return (
            <div ref={ref} {...props} className={\`relative w-full text-base p-2.5 sm:p-4 \${className}\`}>
                {hasAnimation ? <motion.div {...animation}>{props.children}</motion.div> : <div>{props.children}</div>}
            </div>
        );
    }
);`;
