import {
    BLOCKQUOTE_CODE,
    BLOCKQUOTE_WRAPPER_CODE,
    BLOCKQUOTE_AUTHOR_CODE,
    BLOCKQUOTE_CONTENT_CODE,
    BLOCKQUOTE_DEMO_CODE,
    BLOCKQUOTE_USAGE_CODE,
} from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import { Text } from '@components/atoms';
import BlockquoteDemo from './BlockquoteDemo';

export default function BlockquotePage() {
    const preview: IDocumentationPreview = {
        demo: <BlockquoteDemo />,
        code: BLOCKQUOTE_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/blob/master/src/components/atoms/Blockquote',
            description: (
                <Text>
                    Include a custom <span className='badge-item'>Blockquote</span> component for consistent and
                    maintainable usage throughout the project.
                </Text>
            ),
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: BLOCKQUOTE_CODE },
                { label: 'BlockquoteWrapper.tsx', code: BLOCKQUOTE_WRAPPER_CODE },
                { label: 'BlockquoteAuthor.tsx', code: BLOCKQUOTE_AUTHOR_CODE },
                { label: 'BlockquoteContent.tsx', code: BLOCKQUOTE_CONTENT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [BLOCKQUOTE_USAGE_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Blockquote',
        description: 'Used to quote text content from an external source.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
