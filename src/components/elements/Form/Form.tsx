import { useForm } from 'react-hook-form';

import { Btn } from '../../ui/Btn';
import { Input } from '../../ui/Input';
import { Label } from '../../ui/Label';
import { Subtitle } from '../../ui/Subtitle';

export const Form = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className='w-full mb-[40px] last:mb-0'>
            <Subtitle className='mb-[20px] last:mb-0'>React Hook Form</Subtitle>

            <form className='w-full max-w-[600px]' onSubmit={handleSubmit(onSubmit)}>
                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input register={register} name='name' placeholder='Name' />
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input register={register} name='email' type='email' placeholder='Email' />
                </Label>

                <Label className='w-full mb-[20px] last:mb-0'>
                    <Input register={register} name='password' type='password' placeholder='Password' />
                </Label>

                <Btn type='submit'>Send</Btn>
            </form>
        </div>
    );
};
