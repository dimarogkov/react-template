import { Form } from '../elements';
import { Badge, BtnLink, Line, Title } from '../ui';

export const FormPage = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className='relative w-full mb-10 last:mb-0'>
            <div className='w-full'>
                <BtnLink href='/' className='mb-6 last:mb-0'>
                    Back
                </BtnLink>

                <div className='flex gap-2 mb-5 last:mb-0'>
                    <Badge>React Hook Form</Badge>
                    <Badge>Yup Validation</Badge>
                </div>

                <Title>React Form</Title>
            </div>

            <Line />
            <Form onSubmit={onSubmit} />
        </section>
    );
};
