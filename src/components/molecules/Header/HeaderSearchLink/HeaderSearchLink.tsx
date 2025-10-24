import { Link, useLocation } from 'react-router-dom';
import { Text } from '@components/atoms';
import { MoveRight } from 'lucide-react';
import cn from 'classnames';

type Props = {
    link: {
        label: string;
        name: string;
        href: string;
    };
};

export default function HeaderSearchLink({ link }: Props) {
    const { label, name, href } = link;
    const { pathname } = useLocation();

    return (
        <Link
            to={href}
            className={cn(
                'flex items-center justify-between rounded-md py-1.5 px-3 transition-colors duration-300 hover:bg-border mb-2 last:mb-0',
                {
                    'bg-border opacity-70 pointer-events-none': pathname === href,
                }
            )}
        >
            <div className='w-full'>
                <Text size='large' className='text-title'>
                    {name}
                </Text>

                <Text>{label}</Text>
            </div>

            <MoveRight className='size-6' />
        </Link>
    );
}
