type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Subtitle: React.FC<Props> = ({ children, className = '' }) => {
    return (
        <h3 className={`w-full text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-semibold ${className}`}>
            {children}
        </h3>
    );
};
