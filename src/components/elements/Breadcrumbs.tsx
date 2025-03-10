import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

type Props = {
    className?: string;
};

export const Breadcrumbs: FC<Props> = ({ className = '' }) => {
    const { pathname } = useLocation();
    
    const links = pathname.split('/').map((link) => ({
        id: crypto.randomUUID(),
        href: `/${link}`,
        name: link ? `${link.charAt(0).toUpperCase()}${link.slice(1)}` : 'Home',
    }));

    return (
        <section className={`relative w-full ${className}`}>
            <ul className='flex items-center gap-1 w-full'>
                {links.map(({ id, href, name }, index) => (
                    <li key={id}>
                        {links.length - 1 !== index ? (
                            <Link to={href} className='flex items-center line-clamp-1 hover:underline'>
                                <span className='line-clamp-1'>{name}</span>
                                <ChevronRight className='size-5 min-w-5 stroke-1 text-black' />
                            </Link>
                        ) : (
                            <span className='line-clamp-1 text-blue'>{name}</span>
                        )}
                    </li>
                ))}
            </ul>
        </section>
    );
};
