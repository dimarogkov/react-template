import { FC, ReactNode, RefAttributes, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { EnumBtn } from '../../types/enums';
import cn from 'classnames';

interface Props extends RefAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
    href: string;
    target?: string;
    children: ReactNode;
    btnType?: EnumBtn;
    className?: string;
}

export const BtnLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(
    ({ href, target, children, btnType = EnumBtn.default, className = '', ...props }, ref) => {
        const btnLinkClasses = {
            [EnumBtn.default as string]: 'bg-yellow text-bg',
            [EnumBtn.secondary as string]: 'bg-title text-bg',
            [EnumBtn.outline as string]: 'border border-border text-title',
            [EnumBtn.ghost as string]: 'text-text',
        };

        return (
            <Link
                ref={ref}
                to={href}
                target={target}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-1.5 w-full sm:w-fit h-10 font-media px-4 rounded-md transition-all duration-300 will-change-transform active:scale-95 ${className}`,
                    btnLinkClasses[btnType],
                    {
                        'hover:bg-border': btnType === EnumBtn.ghost,
                        'hover:opacity-80': btnType !== EnumBtn.ghost,
                    }
                )}
            >
                {children}
            </Link>
        );
    }
);
