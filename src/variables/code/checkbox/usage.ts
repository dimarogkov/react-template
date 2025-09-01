export const CHECKBOX_USAGE_CODE = `<Checkbox label='Accept terms and conditions' />`;

export const CHECKBOX_CONTROLLED_USAGE_CODE = `import { useState } from 'react';
import { Checkbox, Label } from '../../ui';

export const CheckboxControlled = () => {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<Label>
			<Checkbox
				label='Accept terms and conditions'
				checked={isChecked}
				onChange={() => setIsChecked(!isChecked)}
			/>
		</Label>
	);
};`;
