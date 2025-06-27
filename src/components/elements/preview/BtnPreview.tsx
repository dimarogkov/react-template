import { useLocation } from 'react-router-dom';
import { EnumBtn } from '../../../types/enums';
import { Btn } from '../../ui';
import { User } from 'lucide-react';

export const BtnPreview = () => {
    const { pathname } = useLocation();

    return (
        <div className='flex flex-wrap gap-2.5 w-full'>
            <Btn>Default Button</Btn>
            <Btn btnType={EnumBtn.secondary}>Secondary Button</Btn>
            <Btn btnType={EnumBtn.outline}>Outline Button</Btn>
            <Btn btnType={EnumBtn.ghost}>Ghost Button</Btn>

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
