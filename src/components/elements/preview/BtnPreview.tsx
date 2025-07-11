import { useLocation } from 'react-router-dom';
import { Btn } from '../../ui';
import { User } from 'lucide-react';

export const BtnPreview = () => {
    const { pathname } = useLocation();

    return (
        <div className='relative flex flex-wrap gap-2.5 w-full'>
            <Btn>Default Button</Btn>
            <Btn variant='secondary'>Secondary Button</Btn>
            <Btn variant='outline'>Outline Button</Btn>
            <Btn variant='ghost'>Ghost Button</Btn>

            <Btn isLink>
                <Btn.Link href={pathname}>Link Button</Btn.Link>
            </Btn>

            <Btn>
                <User className='size-5' />
                <span>Icon Button</span>
            </Btn>
        </div>
    );
};
