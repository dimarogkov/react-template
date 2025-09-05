import { LOADER_CODE, LOADER_DEMO_CODE, LOADER_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { LoaderDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const LoaderPage = () => {
    const preview: IDocumentationPreview = {
        demo: <LoaderDemo />,
        code: LOADER_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Loader.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Loader</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [LOADER_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [LOADER_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Loader',
        description: 'A reusable component for indicating loading or processing states.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
