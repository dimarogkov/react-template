import { useRef } from 'react';

export const useSectionsRefs = () => {
    const sectionRef = useRef<Record<string, HTMLDivElement | null>>({});

    const registerRef = (id: string) => (el: HTMLDivElement | null) => {
        sectionRef.current[id] = el;
    };

    return { sectionRef, registerRef };
};
