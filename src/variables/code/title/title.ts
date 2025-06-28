export const TITLE_CODE = `import {
	FC,
	HTMLAttributes,
	ReactNode,
	RefAttributes,
	forwardRef
} from 'react';
import { EnumTitle } from '../../types/enums';

interface Props extends HTMLAttributes<HTMLHeadingElement>, RefAttributes<HTMLHeadingElement> {
	children?: ReactNode;
	titleType?: EnumTitle;
	className?: string;
}

export const Title: FC<Props> = forwardRef<HTMLHeadingElement, Props>(
	({ children, titleType = EnumTitle.h1, className = '', ...props }, ref) => {
		const titleSize = {
			[EnumTitle.h1 as string]: 'text-4xl md:text-5xl',
			[EnumTitle.h2 as string]: 'text-3xl md:text-4xl',
			[EnumTitle.h3 as string]: 'text-2xl md:text-3xl',
			[EnumTitle.h4 as string]: 'text-xl md:text-2xl',
		};

		return (
			<>
				{titleType === EnumTitle.h1 && (
					<h1
						ref={ref}
						{...props}
						className={\`relative font-bold \${titleSize[titleType]} \${className}\`}
					>
						{children}
					</h1>
				)}

				{titleType === EnumTitle.h2 && (
					<h2
						ref={ref}
						{...props}
						className={\`relative font-bold \${titleSize[titleType]} \${className}\`}
					>
						{children}
					</h2>
				)}

				{titleType === EnumTitle.h3 && (
					<h3
						ref={ref}
						{...props}
						className={\`relative font-bold \${titleSize[titleType]} \${className}\`}
					>
						{children}
					</h3>
				)}

				{titleType === EnumTitle.h4 && (
					<h4
						ref={ref}
						{...props}
						className={\`relative font-bold \${titleSize[titleType]} \${className}\`}
					>
						{children}
					</h4>
				)}
			</>
		);
	}
);`;
