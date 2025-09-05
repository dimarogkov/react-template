import { SEPARATOR_CODE, SEPARATOR_DEMO_CODE, SEPARATOR_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { SeparatorDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const SeparatorPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SeparatorDemo />,
        code: SEPARATOR_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Separator.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Separator</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SEPARATOR_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SEPARATOR_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Separator',
        description: 'Visually or semantically separates content.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
