export const TEXTAREA_USAGE_CODE = `<Textarea placeholder='Type your message here.' />`;

export const TEXTAREA_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { Label, Textarea } from '../../ui';

export const TextareaControlled = () => {
	const [value, setValue] = useState('');

	return (
		<Label>
			<Textarea
				placeholder='Type your message here.'
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</Label>
	);
};`;
