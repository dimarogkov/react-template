import { useLocation } from 'react-router-dom';
import { PATHS } from '@app/routes';
import { getLinks } from '@utils';
import { Breadcrumb } from '@components/atoms';

type Props = {
    className?: string;
};

export default function BreadcrumbWrapper({ className = '' }: Props) {
    const { pathname } = useLocation();
    const { links } = getLinks();

    const pathsArr = [PATHS.DOCUMENTATION, ...links.map(({ href }) => href)];
    const isBreadcrumbVisible = pathsArr.includes(pathname);

    return (
        <>
            {isBreadcrumbVisible && (
                <section
                    className={`sticky z-20 top-16 lg:top-20 left-0 w-full h-11 border-b border-border bg-bg ${className}`}
                >
                    <div className='container h-full'>
                        <Breadcrumb />
                    </div>
                </section>
            )}
        </>
    );
}
