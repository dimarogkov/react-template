import { Link } from 'react-router-dom';

type Props = {
    children: React.ReactNode;
    href: string;
    className?: string;
};

export const BtnLink: React.FC<Props> = ({ children, href, className = '' }) => {
    return (
        <Link
            to={href}
            className={`flex items-center justify-center w-full sm:w-fit sm:min-w-[120px] lg:min-w-[140px] h-[40px] lg:h-[44px] lg:text-[18px] font-media px-[16px] tracking-[0.5px] rounded-[4px] text-[#fff] bg-black transition-opacity duration-300 hover:opacity-80 ${className}`}
        >
            {children}
        </Link>
    );
};
