type Props = {
    children: React.ReactNode;
    className?: string;
};

export const Label: React.FC<Props> = ({ children, className = '' }) => {
    const styles = `relative block w-full ${className}`;

    return <label className={styles}>{children}</label>;
};
