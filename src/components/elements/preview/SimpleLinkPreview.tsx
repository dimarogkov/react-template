import { PATHS } from '../../../variables';
import { SimpleLink, Text } from '../../ui';

export const SimpleLinkPreview = () => {
    const { MAIN, COMPONENTS } = PATHS.PAGES;
    const href = `${MAIN.COMPONENTS}${COMPONENTS.SIMPLE_LINK}`;

    return (
        <>
            <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae repellendus maxime esse aut quidem itaque
                ipsum beatae corporis, nobis <SimpleLink href={href}>natus</SimpleLink> ex molestiae quam temporibus
                placeat ad mollitia. Itaque, debitis perferendis!
            </Text>
        </>
    );
};
