import { FC, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { IComponentsSection } from '../../types/interfaces/ComponentsSection';
import { Text } from '../ui';
import cn from 'classnames';

type Props = {
    sectionRef: React.MutableRefObject<Record<string, HTMLElement | null>>;
    sectionsArr: IComponentsSection[];
};

export const ComponentsNavigation: FC<Props> = ({ sectionRef, sectionsArr }) => {
    const [activeSection, setActiveSection] = useState('');
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', () => {
        let found = false;

        for (const { id } of sectionsArr) {
            const el = sectionRef.current[id];
            if (!el) continue;

            const rect = el.getBoundingClientRect();

            if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
                if (activeSection !== id) {
                    setActiveSection(id);
                }

                found = true;
                break;
            }
        }

        if (!found && activeSection !== '') {
            setActiveSection('');
        }
    });

    const handleScroll = (id: string) => {
        const el = sectionRef.current[id];
        el && el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.section className='fixed z-10 top-[164px] hidden xl:block w-[210px] px-4 ml-[56rem]'>
            <div className='w-full'>
                <Text className='text-text/70 mb-2 last:mb-0'>On this Page</Text>

                <ul className='flex flex-col gap-0.5 w-full'>
                    {sectionsArr.map(({ id, text }) => (
                        <li key={id}>
                            <Text>
                                <button
                                    onClick={() => handleScroll(id)}
                                    className={cn('transition-colors duration-200 hover:text-title', {
                                        'text-title': activeSection === id,
                                    })}
                                >
                                    {text}
                                </button>
                            </Text>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    );
};
