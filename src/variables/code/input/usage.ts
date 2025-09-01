export const INPUT_USAGE_CODE = `<Input name='name' placeholder='Username' />`;

export const INPUT_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { Input, Label } from '../../ui';

export const InputControlled = () => {
	const [value, setValue] = useState('');

	return (
		<Label>
			<Input
				name='name'
				placeholder='Username'
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</Label>
	);
};`;

export const INPUT_PASSWORD_USAGE_CODE = `<InputPassword name='password' placeholder='Password' />`;

export const INPUT_PASSWORD_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { InputPassword, Label } from '../../ui';

export const InputPasswordControlled = () => {
	const [value, setValue] = useState('');

	return (
		<Label>
			<InputPassword
				name='password'
				placeholder='Password'
				value={value}
				onChange={({ target }) => setValue(target.value)}
			/>
		</Label>
	);
};`;
