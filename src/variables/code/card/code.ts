export const CARD_CODE = `import { CardWrapper } from './CardWrapper';
import { CardHead } from './CardHead';
import { CardBody } from './CardBody';
import { CardFooter } from './CardFooter';

export const Card = Object.assign(CardWrapper, {
	Head: CardHead,
	Body: CardBody,
	Footer: CardFooter,
});`;

export const CARD_WRAPPER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const CardWrapper: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return (
		<div
			ref={ref}
			{...props}
			className={\`relative w-full rounded-md border border-border bg-border overflow-hidden \${className}\`}
		/>
	);
});`;

export const CARD_HEAD_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const CardHead: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});`;

export const CARD_BODY_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const CardBody: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});`;

export const CARD_FOOTER_CODE = `import { FC, forwardRef, HTMLAttributes, RefAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement>, RefAttributes<HTMLDivElement> {
	className?: string;
}

export const CardFooter: FC<Props> = forwardRef<HTMLDivElement, Props>(({ className = '', ...props }, ref) => {
	return <div ref={ref} {...props} className={\`relative w-full \${className}\`} />;
});`;
