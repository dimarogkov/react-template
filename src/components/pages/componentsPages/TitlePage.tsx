import { TITLE_CODE, TITLE_DEMO_CODE, TITLE_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { TitleDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const TitlePage = () => {
    const preview: IDocumentationPreview = {
        demo: <TitleDemo />,
        code: TITLE_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Title.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Title</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TITLE_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TITLE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Title',
        description: 'Styles for headings.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
