import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../variables';
import { ChevronRight } from 'lucide-react';

type Props = {
    className?: string;
};

export const Breadcrumbs: FC<Props> = ({ className = '' }) => {
    const { pathname } = useLocation();
    const isBreadcrumbVisible = Object.values(PATHS.PAGES).includes(pathname);

    const links = pathname.split('/').map((link) => ({
        id: crypto.randomUUID(),
        href: `/${link}`,
        name: link ? `${link.charAt(0).toUpperCase()}${link.slice(1)}` : 'Home',
    }));

    return (
        <>
            {isBreadcrumbVisible && (
                <section
                    className={`sticky z-10 top-16 lg:top-20 left-0 w-full h-11 border-b border-gray bg-white ${className}`}
                >
                    <div className='container h-full'>
                        <ul className='flex items-center gap-1 w-full h-full'>
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
                    </div>
                </section>
            )}
        </>
    );
};
