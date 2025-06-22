import { PATHS } from '../../../variables';
import { EnumBtn } from '../../../types/enums';
import { Btn } from '../../ui';
import { User } from 'lucide-react';

export const BtnPreview = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;

    return (
        <div className='flex flex-wrap gap-2.5 w-full'>
            <Btn>Default Button</Btn>
            <Btn btnType={EnumBtn.secondary}>Secondary Button</Btn>
            <Btn btnType={EnumBtn.outline}>Outline Button</Btn>
            <Btn btnType={EnumBtn.ghost}>Ghost Button</Btn>

            <Btn isLink>
                <Btn.Link href={`${MAIN.COMPONENTS}${COMPONENTS.BTN}`}>Link Button</Btn.Link>
            </Btn>

            <Btn>
                <User className='size-5' />
                <span>Icon Button</span>
            </Btn>
        </div>
    );
};
