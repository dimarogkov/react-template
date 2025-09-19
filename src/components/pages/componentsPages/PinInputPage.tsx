import { PIN_INPUT_CODE, PIN_INPUT_DEMO_CODE, PIN_INPUT_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { PinInputDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const PinInputPage = () => {
    const preview: IDocumentationPreview = {
        demo: <PinInputDemo />,
        code: PIN_INPUT_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/tree/master/src/components/ui/PinInput.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>PinInput</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [PIN_INPUT_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [PIN_INPUT_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Pin Input',
        description: 'Used to capture a pin code or otp from the user.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
