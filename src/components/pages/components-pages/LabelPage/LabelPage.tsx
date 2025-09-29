import { INPUT_DEMO_CODE, LABEL_CODE, LABEL_USAGE_CODE } from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import { Text } from '@components/atoms';
import LabelDemo from './LabelDemo';

export default function LabelPage() {
    const preview: IDocumentationPreview = {
        demo: <LabelDemo />,
        code: INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/atoms/Label',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Label</span> component for consistent and maintainable
                    usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [LABEL_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [LABEL_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Label',
        description: 'A reusable component for wrapping Form elements.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
