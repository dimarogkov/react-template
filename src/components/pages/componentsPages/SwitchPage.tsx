import {
    NPM_CLASSNAMES_CODE,
    NPM_FRAMER_MOTION_CODE,
    SWITCH_CODE,
    SWITCH_DEMO_CODE,
    SWITCH_USAGE_CODE,
} from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { SwitchDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const SwitchPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SwitchDemo />,
        code: SWITCH_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Classnames', code: NPM_CLASSNAMES_CODE },
                { label: 'Framer Motion', code: NPM_FRAMER_MOTION_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/Switch.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Switch</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SWITCH_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SWITCH_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Switch',
        description: 'A control that allows the user to toggle between checked and not checked.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
