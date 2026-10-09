import { Link } from 'react-router-dom';
import { Text } from '@components/atoms';
import { OWNER_LINK } from './data';

export const Footer = () => {
    return (
        <footer className="w-full py-4 text-center sm:py-5">
            <Text>
                Made with ❤️ by&nbsp;
                <Link to={OWNER_LINK} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
                    Dmytro Rozhkov
                </Link>
            </Text>
        </footer>
    );
};
