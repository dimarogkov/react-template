export const TEXT_CODE = `import { FC, HTMLAttributes, RefAttributes, forwardRef } from 'react';
import { EnumText } from '../../types/enums';
import cn from 'classnames';

interface Props extends HTMLAttributes<HTMLParagraphElement>, RefAttributes<HTMLParagraphElement> {
	textType?: EnumText;
	className?: string;
}

export const Text: FC<Props> = forwardRef<HTMLParagraphElement, Props>(
	({ textType = EnumText.default, className = '', ...props }, ref) => {
		return (
			<p
				ref={ref}
				{...props}
				className={cn(\`w-full text-base \${className}\`, { 'md:text-lg': textType === EnumText.large })}
			/>
		);
	}
);`;
