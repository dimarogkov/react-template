import { useLocation } from 'react-router-dom';
import { SimpleLink, Text } from '../../ui';

export const SimpleLinkPreview = () => {
    const { pathname } = useLocation();

    return (
        <>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus maxime esse aut quidem itaque
                ipsum beatae corporis, nobis <SimpleLink href={pathname}>natus</SimpleLink> ex molestiae quam temporibus
                placeat ad mollitia. Itaque, debitis perferendis!
            </Text>
        </>
    );
};
