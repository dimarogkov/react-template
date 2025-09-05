import { NPM_ZUSTAND_CODE, ZUSTAND_CODE, ZUSTAND_COUNT_CODE, ZUSTAND_DEMO_CODE } from '../../../variables/code';
import {
    IDocumentationCodeSection,
    IDocumentationData,
    IDocumentationPreview,
} from '../../../types/interfaces/Documentation';
import { DocumentationDetail } from '../../blocks';
import { ZustandDemo } from '../../elements/demo';

export const ZustandPage = () => {
    const preview: IDocumentationPreview = {
        demo: <ZustandDemo />,
        code: ZUSTAND_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [NPM_ZUSTAND_CODE],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/tree/master/src/store/zustand',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ZUSTAND_CODE },
                { label: 'count.ts', code: ZUSTAND_COUNT_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ZUSTAND_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Zustand',
        description: 'A small, fast, and scalable bearbones state management solution.',
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
};
