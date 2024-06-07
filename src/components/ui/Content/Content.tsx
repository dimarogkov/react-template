type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Content: React.FC<Props> = ({ children, className = '' }) => {
    return <p className={`w-full lg:text-[18px] ${className}`}>{children}</p>;
};
