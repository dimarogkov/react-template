import { FC } from 'react';
import { DEV_ICONS } from '../../variables';
import { DevIcon } from './DevIcon';

type Props = {
    className?: string;
};

export const HomeSlider: FC<Props> = ({ className = '' }) => {
    return (
        <div className={`flex space-x-2 w-full overflow-hidden ${className}`}>
            <div className='flex space-x-2 animate-loop-scroll will-change-transform'>
                {DEV_ICONS.map((icon, text) => (
                    <DevIcon key={text} devIcon={icon} />
                ))}
            </div>

            <div className='flex space-x-2 animate-loop-scroll will-change-transform' aria-hidden={true}>
                {DEV_ICONS.map((icon, text) => (
                    <DevIcon key={text} devIcon={icon} />
                ))}
            </div>
        </div>
    );
};
