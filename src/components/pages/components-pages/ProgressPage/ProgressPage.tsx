import { NPM_CLASSNAMES_CODE, PROGRESS_CODE, PROGRESS_DEMO_CODE, PROGRESS_USAGE_CODE } from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import { Text } from '@components/atoms';
import ProgressDemo from './ProgressDemo';

export default function ProgressPage() {
    const preview: IDocumentationPreview = {
        demo: <ProgressDemo />,
        code: PROGRESS_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_CLASSNAMES_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/atoms/Progress',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Progress</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [PROGRESS_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [PROGRESS_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
