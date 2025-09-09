export const BLOCKQUOTE_CODE = `import { BlockquoteWrapper } from './BlockquoteWrapper';
import { BlockquoteAuthor } from './BlockquoteAuthor';
import { BlockquoteContent } from './BlockquoteContent';

export const Blockquote = Object.assign(BlockquoteWrapper, {
	Author: BlockquoteAuthor,
	Content: BlockquoteContent,
});`;

export const BLOCKQUOTE_WRAPPER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const BlockquoteWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return (
		<div
			ref={ref}
			{...props}
			className={\`relative flex flex-col gap-1.5 w-full pl-3 md:pl-4 border-l-4 border-border \${className}\`}
		/>
	);
});`;

export const BLOCKQUOTE_AUTHOR_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const BlockquoteAuthor: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});`;

export const BLOCKQUOTE_CONTENT_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const BlockquoteContent: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});`;
