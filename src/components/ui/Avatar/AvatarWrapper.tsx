import {
    Children,
    cloneElement,
    FC,
    forwardRef,
    HTMLAttributes,
    isValidElement,
    ReactElement,
    RefAttributes,
    useEffect,
    useRef,
    useState,
} from 'react';
import { EnumAvatar } from '../../../types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
    currentIndex?: number;
    type?: EnumAvatar;
    isOnline?: boolean;
    isOffline?: boolean;
    className?: string;
}

export const AvatarWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(
    (
        { currentIndex, type = EnumAvatar.circle, isOnline = false, isOffline = false, className = '', ...props },
        ref
    ) => {
        const [currentWidth, setCurrentWidth] = useState(0);
        const avatarRef = useRef<HTMLDivElement>(null);

        const isTypeCircle = type === EnumAvatar.circle;
        const isTypeSquare = type === EnumAvatar.square;

        useEffect(() => {
            setCurrentWidth(avatarRef.current?.offsetWidth || 48);
        }, []);

        const avatarStyle = {
            ...(currentIndex && {
                left: `${currentIndex * Math.round(currentWidth / 4) * -1}px`,
                outline: `3px solid #0a0a0a`,
            }),
        };

        return (
            <div
                ref={ref || avatarRef}
                {...props}
                className={cn(`relative skeleton ${className || 'size-12'}`, {
                    'rounded-full': isTypeCircle,
                    'rounded-md': isTypeSquare,
                    'offline-square': isOffline && isTypeSquare,
                    'online-square': isOnline && isTypeSquare,
                    offline: isOffline && isTypeCircle,
                    online: isOnline && isTypeCircle,
                })}
                style={avatarStyle}
            >
                {Children.map(props.children, (child) => {
                    if (isValidElement(child)) {
                        return cloneElement(child as ReactElement, { type });
                    }

                    return child;
                })}
            </div>
        );
    }
);
