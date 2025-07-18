import { FC, forwardRef, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { ComponentsCodeDetail } from './ComponentsCodeDetail';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    codeArr: string[];
    children?: ReactNode;
}

export const ComponentsCode: FC<Props> = forwardRef<HTMLDivElement, Props>(({ codeArr, children, ...props }, ref) => {
    return (
        <div ref={ref} {...props} className='relative flex flex-col gap-4 md:gap-5 w-full py-4 md:py-5 scroll-mt-36'>
            <div className='w-full'>{children}</div>

            {codeArr.map((code) => (
                <ComponentsCodeDetail key={crypto.randomUUID()} code={code} className='rounded-md border border-bg' />
            ))}
        </div>
    );
});
