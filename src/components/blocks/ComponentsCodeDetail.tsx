import { FC, useEffect, useState } from 'react';
import { getHighlightCode } from '../../helpers';
import { ClipboardCheck, Clipboard } from 'lucide-react';

type Props = {
    code: string;
};

export const ComponentsCodeDetail: FC<Props> = ({ code }) => {
    const [highlightCode, setHighlightCode] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        getHighlightCode(code).then(setHighlightCode);
    }, [code]);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className='relative w-full rounded-md overflow-hidden border border-border'>
            <button
                type='button'
                onClick={handleCopy}
                className='absolute top-2 right-2 flex items-center justify-center size-8 rounded-md transition-colors hover:bg-border'
            >
                {copied ? <ClipboardCheck className='size-5 text-text' /> : <Clipboard className='size-5 text-text' />}
            </button>

            <div className='text-base' dangerouslySetInnerHTML={{ __html: highlightCode }} />
        </div>
    );
};
