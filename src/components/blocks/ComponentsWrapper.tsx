import { FC, ReactNode } from 'react';
import { useOutletContext } from 'react-router-dom';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

export const ComponentsWrapper: FC<Props> = ({ navigation, children }) => {
    const { Sidebar } = useOutletContext<{ Sidebar: JSX.Element }>();

    return (
        <div className='grid grid-cols-1 xl:grid-cols-[208px,896px,208px] xl:items-start w-full'>
            {Sidebar}
            {children}
            {navigation}
        </div>
    );
};
