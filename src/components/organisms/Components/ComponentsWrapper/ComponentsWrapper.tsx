import { ReactElement, ReactNode } from 'react';
import { useOutletContext } from 'react-router-dom';

type Props = {
    navigation?: ReactNode;
    children?: ReactNode;
};

export const ComponentsWrapper = ({ navigation, children }: Props) => {
    const { Sidebar } = useOutletContext<{ Sidebar: ReactElement }>();

    return (
        <div>
            <div className="grid w-full grid-cols-1 pb-16 md:pb-0 xl:grid-cols-[208px_796px_208px] xl:items-start">
                {Sidebar}
                {children}
                {navigation}
            </div>
        </div>
    );
};
