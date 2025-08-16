import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePrevNextComponentPath } from '../../hooks';
import { Separator } from '../ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children?: ReactNode;
};

export const ComponentsHead: FC<Props> = ({ children }) => {
    const links = usePrevNextComponentPath();

    return (
        <div className='relative w-full pb-2'>
            <div className='w-full md:pr-16 mb-5 sm:mb-7 last:mb-0'>{children}</div>

            <Separator />

            <div className='absolute top-0 right-0 hidden md:flex gap-2'>
                {links.map(({ href }, index) => (
                    <Link
                        key={href}
                        to={href}
                        className='flex items-center justify-center size-7 text-base rounded-md bg-border transition-colors duration-300 hover:text-title'
                    >
                        {index === 0 ? <ChevronLeft className='size-5' /> : <ChevronRight className='size-5' />}
                    </Link>
                ))}
            </div>
        </div>
    );
};
