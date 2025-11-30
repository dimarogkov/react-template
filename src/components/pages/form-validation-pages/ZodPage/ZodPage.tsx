import {
    NPM_HOOK_FORM_CODE,
    NPM_HOOK_FORM_RESOLVERS_CODE,
    NPM_ZOD_CODE,
    ZOD_CODE,
    ZOD_SCHEMA_CODE,
    ZOP_OPTIONS_CODE,
    ZOD_DEMO_CODE,
} from '@code';
import { IDocumentationCodeSection, IDocumentationData, IDocumentationPreview } from '@interfaces/Documentation';
import { DocumentationDetail } from '@components/organisms';
import ZodDemo from './ZodDemo';

export default function ZodPage() {
    const preview: IDocumentationPreview = {
        demo: <ZodDemo />,
        code: ZOD_DEMO_CODE,
    };

    const codeSections: IDocumentationCodeSection[] = [
        {
            id: 'installation',
            title: 'Installation',
            link: '',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'Zod', code: NPM_ZOD_CODE },
                { label: 'React Hook Form', code: NPM_HOOK_FORM_CODE },
                { label: 'Resolvers', code: NPM_HOOK_FORM_RESOLVERS_CODE },
            ],
        },
        {
            id: 'code',
            title: 'Code',
            link: 'https://github.com/dimarogkov/react-template/tree/master/src/form-validation/zod',
            description: null,
            withAccordion: true,
            codeArr: [
                { label: 'index.ts', code: ZOD_CODE },
                { label: 'formOptions.ts', code: ZOP_OPTIONS_CODE },
                { label: 'schema.ts', code: ZOD_SCHEMA_CODE },
            ],
        },
        {
            id: 'usage',
            title: 'Usage',
            link: '',
            description: null,
            withAccordion: false,
            codeArr: [ZOD_DEMO_CODE],
        },
    ];

    const data: IDocumentationData = {
        title: 'Zod',
        description:
            'A popular schema validation library seamlessly integrated with React Hook Form for building dynamic and reliable forms.',
        links: [
            { href: 'https://zod.dev/', name: 'Zod Docs' },
            { href: 'https://odocs-zod.vercel.app/', name: 'Zod API Reference' },
            { href: 'https://react-hook-form.com/get-started', name: 'React Hook Form Docs' },
            { href: 'https://react-hook-form.com/docs', name: 'React Hook Form API Reference' },
        ],
        preview,
        codeSections,
    };

    return <DocumentationDetail data={data} />;
}
