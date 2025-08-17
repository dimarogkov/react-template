import { FC } from 'react';
import { IDevIcon } from '../../types/interfaces/DevIcon';
import { Text } from '../ui';

type Props = {
    devIcon: IDevIcon;
    className?: string;
};

export const DevIcon: FC<Props> = ({ devIcon, className = '' }) => {
    const { icon, text } = devIcon;

    return (
        <div
            className={`relative flex items-center gap-2 px-3.5 py-1 rounded-full border border-border whitespace-nowrap ${className}`}
        >
            <i className={`text-xl ${icon}`} />
            <Text className='select-none !w-fit'>{text}</Text>
        </div>
    );
};
