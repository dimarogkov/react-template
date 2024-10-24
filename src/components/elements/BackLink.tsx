import { PATHS } from '../../variables/paths';
import { BtnLink } from '../ui';

type Props = {
    href?: string;
    className?: string;
};

export const BackLink: React.FC<Props> = ({ href = PATHS.HOME, className = '' }) => {
    return (
        <BtnLink href={href} className={className}>
            Back
        </BtnLink>
    );
};
