import { Checkbox, Label } from '../../ui';

export const CheckboxPreview = () => {
    return (
        <div className='flex flex-col gap-2.5 w-full'>
            <Label>
                <Checkbox label='Accept terms and conditions' />
            </Label>

            <Label>
                <Checkbox label='Accept terms and conditions' isChecked />
            </Label>

            <Label>
                <Checkbox label='Accept terms and conditions' disabled />
            </Label>
        </div>
    );
};
