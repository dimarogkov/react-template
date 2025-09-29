import { ReactNode } from 'react';
import { useOutletContext } from 'react-router-dom';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

export default function ComponentsWrapper({ navigation, children }: Props) {
    const { Sidebar } = useOutletContext<{ Sidebar: JSX.Element }>();

    return (
        <div className='grid grid-cols-1 xl:grid-cols-[208px,796px,208px] xl:items-start w-full pb-16 md:pb-0'>
            {Sidebar}
            {children}
            {navigation}
        </div>
    );
}
