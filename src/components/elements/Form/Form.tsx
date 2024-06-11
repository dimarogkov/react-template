import { useForm } from 'react-hook-form';

import { formOptions } from '../../../helpers/formOptions';

import { FormNames } from '../../../types/enums/FormNames';

import { Btn } from '../../ui/Btn';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';
import { Subtitle } from '../../ui/Subtitle';
import { ErrorMessage } from '../../ui/ErrorMessage';

export const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='w-full mb-[40px] last:mb-0'>
            <Subtitle className='mb-[20px] last:mb-0'>React Hook Form</Subtitle>

            <form className='w-full max-w-[600px]' onSubmit={handleSubmit(onSubmit)}>
                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        placeholder='Name'
                        register={register}
                        registerName={FormNames.name}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='email'
                        placeholder='Email'
                        register={register}
                        registerName={FormNames.email}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input
                        type='password'
                        placeholder='Password'
                        register={register}
                        registerName={FormNames.password}
                        className='mb-[8px] last:mb-0'
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Label>

                <Btn type='submit'>Send</Btn>
            </form>
        </div>
    );
};
