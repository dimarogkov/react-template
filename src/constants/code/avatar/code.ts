export const AVATAR_CODE = `import { AvatarGroup } from './AvatarGroup';
import { AvatarWrapper } from './AvatarWrapper';
import { AvatarLink } from './AvatarLink';
import { AvatarImg } from './AvatarImg';

export const Avatar = Object.assign(AvatarWrapper, {
  Link: AvatarLink,
  Img: AvatarImg
});

export { AvatarGroup };`;

export const AVATAR_STYLE_CODE = `.online::before,
.online-square::before {
  position: absolute;
  z-index: 1;
  content: '';
  top: 3%;
  right: 3%;
  width: 20%;
  height: 20%;
  border-radius: 50%;
  outline: 3px solid var(--color-bg);
  background-color: var(--color-online);
}

.online-square::before {
  top: -10%;
  right: -10%;
}`;

export const AVATAR_WRAPPER_CODE = `import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  currentIndex?: number;
  type?: 'circle' | 'square';
  isOnline?: boolean;
  hasRing?: boolean;
  className?: string;
}

export const AvatarWrapper = forwardRef<HTMLDivElement, Props>(
  ({ currentIndex, type = 'circle', isOnline = false, hasRing = false, className = '', ...props }, ref) => {
    const [currentWidth, setCurrentWidth] = useState(0);
    const avatarRef = useRef<HTMLDivElement>(null);

    const isTypeCircle = type === 'circle';

    useEffect(() => {
      setCurrentWidth(avatarRef.current?.offsetWidth || 48);
    }, []);

    const avatarStyle = {
      ...(currentIndex && {
        left: \`\${currentIndex * Math.round(currentWidth / 4) * -1}px\`,
        outline: '3px solid var(--color-bg)'
      })
    };

    return (
      <div
        ref={ref || avatarRef}
        {...props}
        style={avatarStyle}
        className={cn('relative', className || 'size-12', {
          'rounded-full': isTypeCircle,
          'rounded-md': !isTypeCircle,
          'online-square': isOnline && !isTypeCircle,
          online: isOnline && isTypeCircle,
          'outline-title outline-2 outline-offset-2': hasRing
        })}
      >
        {Children.map(props.children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, { type })
            : child;
        })}

        {isOnline && <span className="sr-only">Online</span>}
      </div>
    );
  }
);`;

export const AVATAR_LINK_CODE = `import {
  AnchorHTMLAttributes,
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefAttributes
} from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement>, RefAttributes<HTMLAnchorElement> {
  href: string;
  type?: 'circle' | 'square';
  className?: string;
  children?: ReactNode;
}

export const AvatarLink = forwardRef<HTMLAnchorElement, Props>(
  ({ href, type = 'circle', children, className = '', ...props }, ref) => {
    const isTypeCircle = type === 'circle';

    return (
      <Link
        ref={ref}
        {...props}
        to={href}
        className={cn('group relative block h-full w-full overflow-hidden', className, {
          'rounded-full': isTypeCircle,
          'rounded-md': !isTypeCircle
        })}
      >
        {Children.map(children, (child) => {
          return isValidElement(child)
            ? cloneElement(child as ReactElement<Record<string, unknown>>, { type })
            : child;
        })}
      </Link>
    );
  }
);`;

export const AVATAR_IMG_CODE = `import { forwardRef, ImgHTMLAttributes, ReactNode, RefAttributes, useState } from 'react';
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
);`;

export const AVATAR_GROUP_CODE = `import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  RefAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
  visibleCount?: number;
  className?: string;
}

export const AvatarGroup = forwardRef<HTMLDivElement, Props>(({ visibleCount, className = '', ...props }, ref) => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const groupRef = useRef<HTMLDivElement>(null);

  const childArray = Children.toArray(props.children) as ReactElement<Record<string, unknown>>[];
  const childType = childArray[0].props.type || 'circle';
  const widthClasses = childArray[0].props.className;

  useEffect(() => {
    setCurrentWidth(groupRef.current?.offsetHeight || 48);
  }, []);

  const groupStyle = {
    ...(visibleCount && {
      left: \`\${visibleCount * Math.round(currentWidth / 4) * -1}px\`,
      outline: '3px solid var(--color-bg)'
    })
  };

  return (
    <div ref={ref || groupRef} {...props} className={cn('relative flex items-center', className)}>
      {childArray.slice(0, visibleCount).map((child, index) => {
        return isValidElement(child)
          ? cloneElement(child as ReactElement<Record<string, unknown>>, { currentIndex: index })
          : child;
      })}

      {visibleCount && childArray.length > visibleCount && (
        <div
          role="img"
          aria-label={\`and \${childArray.length - visibleCount} more\`}
          className={cn(
            \`bg-title text-bg relative flex items-center justify-center text-lg select-none \${
              widthClasses || 'size-12'
            }\`,
            {
              'rounded-full': childType === 'circle',
              'rounded-md': childType === 'square'
            }
          )}
          style={groupStyle}
        >
          +{childArray.length - visibleCount}
        </div>
      )}
    </div>
  );
});`;
