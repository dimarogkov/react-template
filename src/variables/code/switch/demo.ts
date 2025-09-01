export const SWITCH_DEMO_CODE = `import { Switch } from '../../ui';

export const SwitchDemo = () => {
	return (
		<div className='relative flex flex-col gap-2.5 w-full'>
			<Switch />
			<Switch isActive />
			<Switch disabled />
		</div>
	);
};`;
