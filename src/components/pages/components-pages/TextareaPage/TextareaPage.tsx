import { TEXTAREA_CODE, TEXTAREA_DEMO_CODE, TEXTAREA_USAGE_CODE, TEXTAREA_CONTROLLED_USAGE_CODE } from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import { Text } from '@components/atoms';
import TextareaDemo from './TextareaDemo';

export default function TextareaPage() {
    const preview: IDocumentationPreview = {
        demo: <TextareaDemo />,
        code: TEXTAREA_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/atoms/Textarea',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Textarea</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TEXTAREA_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [TEXTAREA_USAGE_CODE],
        },
        {
            id: 'controlled',
            title: 'Controlled',
            link: '',
            description: (
                <Text>
                    To control the Textarea, add <span className='badge-item'>value</span> and&nbsp;
                    <span className='badge-item'>onChange</span> props to manage its state manually.
                </Text>
            ),
            withAccordion: false,
            codeArr: [TEXTAREA_CONTROLLED_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Textarea',
        description: 'Displays a form textarea or a component that looks like a textarea.',
        links: [],
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
