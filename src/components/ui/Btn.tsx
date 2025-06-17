import { ButtonHTMLAttributes, FC, forwardRef, RefAttributes } from 'react';
import { EnumBtn } from '../../types/enums';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
    btnType?: EnumBtn;
    className?: string;
}

export const Btn: FC<Props> = forwardRef<HTMLButtonElement, Props>(
    ({ btnType = EnumBtn.default, className = '', ...props }, ref) => {
        return (
            <button
                ref={ref}
                {...props}
                className={cn(
                    `flex items-center justify-center gap-1.5 w-full sm:w-fit h-10 font-media px-4 rounded-md outline-none transition-all duration-300 will-change-transform active:scale-95 ${className}`,
                    {
                        'bg-border text-text pointer-events-none': props.disabled,
                        'bg-yellow text-bg hover:opacity-80': !props.disabled && btnType === EnumBtn.default,
                        'bg-title text-bg hover:opacity-80': !props.disabled && btnType === EnumBtn.secondary,
                        'border border-border text-title hover:opacity-80':
                            !props.disabled && btnType === EnumBtn.outline,
                        'text-text hover:bg-border': !props.disabled && btnType === EnumBtn.ghost,
                    }
                )}
            />
        );
    }
);
