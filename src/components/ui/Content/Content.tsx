type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Content: React.FC<Props> = ({ children, className = '' }) => {
    const styles = `w-full lg:text-[18px] ${className}`;

    return <p className={styles}>{children}</p>;
};
