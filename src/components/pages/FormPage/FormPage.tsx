import { useForm } from 'react-hook-form';
import { formOptions } from '../../../helpers/formOptions';
import { EnumFormNames } from '../../../types/enums/FormNames';
import { EnumBtn } from '../../../types/enums/Btn';
import { Btn, BtnLink, Checkbox, ErrorMessage, Input, Label, Line, Option, Radio, Select, Text, Title } from '../../ui';

export const FormPage = () => {
    const {
        register,
        watch,
        handleSubmit,
        reset,
        formState: { errors, isSubmitted },
    } = useForm(formOptions);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className='relative w-full mb-10 last:mb-0'>
            <div className='w-full'>
                <BtnLink href='/' className='mb-6 last:mb-0'>
                    Back
                </BtnLink>

                <Title>React Hook Form</Title>
            </div>

            <Line />

            <form className='w-full max-w-xl' onSubmit={handleSubmit(onSubmit)}>
                {/* select */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Select register={register} registerName={EnumFormNames.select} className='mb-2 last:mb-0'>
                        <Option value='default' className='hidden'>
                            Select Option
                        </Option>
                        <Option value='option_1'>Option 1</Option>
                        <Option value='option_2'>Option 2</Option>
                        <Option value='option_3'>Option 3</Option>
                    </Select>

                    {errors.select && <ErrorMessage>{errors.select.message}</ErrorMessage>}
                </Label>
                {/* end select */}

                {/* text */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        placeholder='Username'
                        register={register}
                        registerName={EnumFormNames.username}
                        className='mb-2 last:mb-0'
                    />

                    {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
                </Label>
                {/* end text */}

                {/* number */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        type='number'
                        placeholder='Age'
                        register={register}
                        registerName={EnumFormNames.age}
                        className='mb-2 last:mb-0'
                    />

                    {errors.age && <ErrorMessage>{errors.age.message}</ErrorMessage>}
                </Label>
                {/* end number */}

                {/* email */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        type='email'
                        placeholder='Email'
                        register={register}
                        registerName={EnumFormNames.email}
                        className='mb-2 last:mb-0'
                    />

                    {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
                </Label>
                {/* end email */}

                {/* phone */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        placeholder='Phone'
                        register={register}
                        registerName={EnumFormNames.phone}
                        className='mb-2 last:mb-0'
                    />

                    {errors.phone && <ErrorMessage>{errors.phone.message}</ErrorMessage>}
                </Label>
                {/* end phone */}

                {/* password */}
                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        type='password'
                        placeholder='Password'
                        register={register}
                        registerName={EnumFormNames.password}
                        className='mb-2 last:mb-0'
                    />

                    {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
                </Label>

                <Label className='w-full mb-5 last:mb-0'>
                    <Input
                        type='password'
                        placeholder='Confirm Password'
                        register={register}
                        registerName={EnumFormNames.confirmPassword}
                        className='mb-2 last:mb-0'
                    />

                    {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}
                </Label>
                {/* end password */}

                {/* radio */}
                <div className='w-full mb-5 last:mb-0'>
                    <div className='flex gap-4 w-full mb-2 last:mb-0'>
                        <Label className='w-full'>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <Radio
                                    isChecked={watch('radioType')}
                                    value='type_one'
                                    register={register}
                                    registerName={EnumFormNames.radioType}
                                />
                                <Text>Type One</Text>
                            </div>
                        </Label>

                        <Label className='w-full'>
                            <div className='flex items-center gap-2 cursor-pointer'>
                                <Radio
                                    isChecked={watch('radioType')}
                                    value='type_two'
                                    register={register}
                                    registerName={EnumFormNames.radioType}
                                />
                                <Text>Type Two</Text>
                            </div>
                        </Label>
                    </div>

                    {errors.radioType && <ErrorMessage>{errors.radioType.message}</ErrorMessage>}
                </div>
                {/* end radio */}

                {/* checkbox */}
                <Label className='w-full mb-5 last:mb-0'>
                    <div className='flex items-center gap-2 cursor-pointer mb-2 last:mb-0'>
                        <Checkbox
                            isChecked={watch('rememberMe')}
                            register={register}
                            registerName={EnumFormNames.rememberMe}
                        />
                        <Text>Remember me</Text>
                    </div>

                    {errors.rememberMe && <ErrorMessage>{errors.rememberMe.message}</ErrorMessage>}
                </Label>
                {/* end checkbox */}

                <div className='flex flex-wrap gap-2 w-full'>
                    <Btn type='submit'>Send</Btn>

                    <Btn type='button' btnType={EnumBtn.gray} disabled={!isSubmitted} onClick={() => reset()}>
                        Reset
                    </Btn>
                </div>
            </form>
        </section>
    );
};
