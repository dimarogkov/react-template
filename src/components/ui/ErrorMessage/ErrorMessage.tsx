type Props = {
    children: React.ReactNode;
    className?: string;
};

export const ErrorMessage: React.FC<Props> = ({ children, className = '' }) => {
    const styles = `w-full font-medium text-[14px] text-rose-600 ${className}`;

    return <p className={styles}>{children}</p>;
};
