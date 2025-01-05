import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { formOptions } from '../../helpers';
import { EnumBtn, EnumFormNames } from '../../types/enums';
import { Btn, Checkbox, ErrorMessage, Input, InputPassword, Label, Radio, Select, Text } from '../ui';

type Props = {
    onSubmit: (data: any) => void;
};

export const Form: FC<Props> = ({ onSubmit }) => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    return (
        <form className='flex flex-col gap-5 w-full max-w-xl' onSubmit={handleSubmit(onSubmit)}>
            <Label className='flex flex-col gap-2'>
                <Select {...register(EnumFormNames.select)}>
                    <Select.Option value='default' hidden>
                        Select Option
                    </Select.Option>
                    <Select.Option value='option_1'>Option 1</Select.Option>
                    <Select.Option value='option_2'>Option 2</Select.Option>
                    <Select.Option value='option_3'>Option 3</Select.Option>
                </Select>

                {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register(EnumFormNames.username)} placeholder='Username' />
                {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register(EnumFormNames.age)} type='number' placeholder='Age' />
                {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register(EnumFormNames.email)} placeholder='Email' />
                {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <Input {...register(EnumFormNames.phone)} placeholder='Phone' />
                {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword {...register(EnumFormNames.password)} placeholder='Password' />
                {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            </Label>

            <Label className='flex flex-col gap-2'>
                <InputPassword {...register(EnumFormNames.confirmPassword)} placeholder='Confirm Password' />
                {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-col gap-2 w-full'>
                <div className='flex gap-4 w-full'>
                    <Label className='w-full'>
                        <Radio
                            {...register(EnumFormNames.radioType)}
                            isChecked={watch('radioType')}
                            value='type_one'
                            label='Type One'
                        />
                    </Label>

                    <Label className='w-full'>
                        <Radio
                            {...register(EnumFormNames.radioType)}
                            isChecked={watch('radioType')}
                            value='type_two'
                            label='Type Two'
                        />
                    </Label>
                </div>

                {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
            </div>

            <Label className='flex flex-col gap-2'>
                <Checkbox {...register(EnumFormNames.rememberMe)} isChecked={watch('rememberMe')} label='Remember me' />
                {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
            </Label>

            <div className='flex flex-wrap gap-2 w-full'>
                <Btn type='submit'>Send</Btn>

                <Btn type='button' btnType={EnumBtn.disabled} disabled={!isSubmitted} onClick={() => reset()}>
                    Reset
                </Btn>
            </div>
        </form>
    );
};
