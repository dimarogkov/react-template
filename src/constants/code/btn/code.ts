export const BTN_CODE = `import { ButtonHTMLAttributes, forwardRef, HTMLAttributeAnchorTarget, RefAttributes } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, RefAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost';
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}

export const Btn = forwardRef<HTMLButtonElement, Props>(
  ({ variant = 'default', href, target, className = '', ...props }, ref) => {
    const classes = cn(
      'flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 rounded-md px-4 outline-hidden transition-all duration-300 will-change-transform active:scale-95 sm:w-fit',
      className,
      {
        'pointer-events-none select-none': props.disabled,
        'bg-border text-text': props.disabled || variant === 'default',
        'hover:opacity-80': !props.disabled && variant === 'default',
        'bg-title text-bg hover:opacity-80': !props.disabled && variant === 'secondary',
        'border-border text-title border hover:opacity-80': !props.disabled && variant === 'outline',
        'text-text hover:bg-border': !props.disabled && variant === 'ghost'
      }
    );

    return href ? (
      <Link
        to={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {props.children}
      </Link>
    ) : (
      <button ref={ref} {...props} type={props.type || 'button'} className={classes} />
    );
  }
);`;
