import { SEPARATOR_CODE, SEPARATOR_DEMO_CODE, SEPARATOR_USAGE_CODE } from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import { Text } from '@components/atoms';
import SeparatorDemo from './SeparatorDemo';

export default function SeparatorPage() {
    const preview: IDocumentationPreview = {
        demo: <SeparatorDemo />,
        code: SEPARATOR_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/atoms/Separator',
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
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
