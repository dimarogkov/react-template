import { Switch } from '../../ui';

export const SwitchPreview = () => {
    return (
        <div className='relative flex flex-col gap-2.5 w-full'>
            <Switch />
            <Switch isActive />
            <Switch disabled />
        </div>
    );
};
