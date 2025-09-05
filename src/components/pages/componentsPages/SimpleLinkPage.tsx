import { SIMPLE_LINK_CODE, SIMPLE_LINK_DEMO_CODE, SIMPLE_LINK_USAGE_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { SimpleLinkDemo } from '../../elements/demo';
import { Text } from '../../ui';

export const SimpleLinkPage = () => {
    const preview: IDocumentationPreview = {
        demo: <SimpleLinkDemo />,
        code: SIMPLE_LINK_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/ui/SimpleLink.tsx',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>SimpleLink</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: false,
            codeArr: [SIMPLE_LINK_CODE],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [SIMPLE_LINK_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Simple Link',
        description:
            'A simple text link styled for use inside components or previews. Useful for inline documentation, examples, or interactive UI snippets.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
