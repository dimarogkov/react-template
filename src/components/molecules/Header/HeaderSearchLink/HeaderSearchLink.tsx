import { KeyboardEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { StatusBadge, Text } from '@components/atoms';
import { ChevronRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    link: {
        label: string;
        name: string;
        href: string;
        status?: 'new' | 'updated';
    };
    onKeyDown?: (e: KeyboardEvent<HTMLAnchorElement>) => void;
};

export const HeaderSearchLink = ({ link, onKeyDown }: Props) => {
    const { label, name, href, status } = link;
    const { pathname } = useLocation();

    return (
        <Link
            to={href}
            onKeyDown={onKeyDown}
            className={cn(
                'group hover:bg-border focus:bg-border flex h-16.5 items-center justify-between rounded-md px-3 outline-hidden transition-colors duration-300',
                {
                    'bg-border pointer-events-none opacity-70': pathname === href
                }
            )}
        >
            <div className="w-full flex-1">
                <div className="flex items-center gap-2">
                    <Text size="large" className="text-title w-fit!">
                        {name}
                    </Text>

                    {status && <StatusBadge variant={status} />}
                </div>

                <Text>{label}</Text>
            </div>

            <ChevronRight className="group-hover:text-title size-6 transition-all duration-200 will-change-transform group-hover:translate-x-1 group-focus:translate-x-1" />
        </Link>
    );
};
