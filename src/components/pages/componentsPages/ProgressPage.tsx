import { NPM_CLASSNAMES_CODE, PROGRESS_CODE, PROGRESS_DEMO_CODE, PROGRESS_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { ProgressDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const ProgressPage = () => {
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
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Progress.tsx',
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
};
