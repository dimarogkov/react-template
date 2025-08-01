import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { usePrevNextComponentPath } from '../../hooks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Props = {
    children?: ReactNode;
};

export const ComponentsHead: FC<Props> = ({ children }) => {
    const { prevPath, nextPath } = usePrevNextComponentPath();

    return (
        <div className='relative w-full pb-4 md:pb-5'>
            <div className='w-full pr-20'>{children}</div>

            <div className='absolute top-0 right-0 flex gap-2'>
                {[prevPath, nextPath].map(({ href }, index) => (
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
