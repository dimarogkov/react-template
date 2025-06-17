import { FC, ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export const ComponentsHead: FC<Props> = ({ children }) => {
    return <div className='relative w-full pb-4 md:pb-5'>{children}</div>;
};
