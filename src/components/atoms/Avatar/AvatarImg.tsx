import { forwardRef, ImgHTMLAttributes, ReactNode, RefAttributes, useState } from 'react';
import cn from 'classnames';

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'alt'>, RefAttributes<HTMLImageElement> {
    alt: string;
    type?: 'circle' | 'square';
    fallback?: ReactNode;
    className?: string;
}

export const AvatarImg = forwardRef<HTMLImageElement, Props>(
    ({ type = 'circle', fallback, className = '', onLoad, onError, ...props }, ref) => {
        const [isLoaded, setIsLoaded] = useState(false);
        const [hasError, setHasError] = useState(false);

        const isTypeCircle = type === 'circle';

        return hasError && fallback ? (
            <div
                role="img"
                aria-label={props.alt}
                className={cn(
                    'bg-border text-title absolute inset-0 flex items-center justify-center text-base font-medium',
                    className,
                    {
                        'rounded-full': isTypeCircle,
                        'rounded-md': !isTypeCircle
                    }
                )}
            >
                {fallback}
            </div>
        ) : (
            <>
                {!isLoaded && (
                    <div
                        aria-hidden="true"
                        className={cn('bg-border absolute inset-0 animate-pulse', className, {
                            'rounded-full': isTypeCircle,
                            'rounded-md': !isTypeCircle
                        })}
                    />
                )}

                <img
                    ref={ref}
                    {...props}
                    alt={props.alt}
                    onLoad={(e) => {
                        setIsLoaded(true);
                        onLoad?.(e);
                    }}
                    onError={(e) => {
                        setHasError(true);
                        onError?.(e);
                    }}
                    className={cn(
                        'absolute top-0 left-0 object-cover object-center transition-transform duration-300 will-change-transform group-hover:scale-105',
                        className,
                        {
                            'rounded-full': isTypeCircle,
                            'rounded-md': !isTypeCircle
                        }
                    )}
                />
            </>
        );
    }
);
