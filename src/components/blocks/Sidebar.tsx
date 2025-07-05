import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { getLinks } from '../../helpers';
import { SidebarLink } from '../elements';
import { Text } from '../ui';
import cn from 'classnames';

export const Sidebar = () => {
    const [isStart, setIsStart] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const { pathname } = useLocation();
    const { componentsLinks, storeLinks } = getLinks();

    const { scrollYProgress } = useScroll({
        container: sidebarRef,
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setIsStart(latest === 0);
        setIsEnd(latest >= 0.99);
    });

    return (
        <section className='fixed z-10 top-[164px] left-0 hidden xl:block w-52 px-5'>
            <motion.div
                ref={sidebarRef}
                className={cn('sidebar w-full h-[calc(100svh-204px)] overflow-auto', {
                    'sidebar-bottom-no-fade': isEnd,
                    'sidebar-top-no-fade': isStart,
                })}
            >
                <div className='flex flex-col gap-3.5 w-full'>
                    <div className='w-full'>
                        <Text className='text-title mb-3 last:mb-0'>Components</Text>

                        <ul className='flex flex-col gap-3.5 w-full pl-4 border-l border-border'>
                            {componentsLinks.map((link) => (
                                <li key={link.name} className='w-full'>
                                    <SidebarLink link={link} isActive={pathname === link.href} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='w-full'>
                        <Text className='text-title mb-3 last:mb-0'>Store</Text>

                        <ul className='flex flex-col gap-3.5 w-full pl-4 border-l border-border'>
                            {storeLinks.map((link) => (
                                <li key={link.name} className='w-full'>
                                    <SidebarLink link={link} isActive={pathname === link.href} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
