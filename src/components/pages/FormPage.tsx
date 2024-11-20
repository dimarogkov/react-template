import { BackLink, Breadcrumbs, Form } from '../elements';
import { Badge, Line, Title } from '../ui';

export const FormPage = () => {
    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <section className='relative w-full'>
            <div className='w-full'>
                <BackLink className='mb-6 last:mb-0' />

                <Breadcrumbs className='mb-6 last:mb-0' />

                <Badge className='mb-6 last:mb-0'>
                    <Badge.Item>React Hook Form</Badge.Item>
                    <Badge.Item>Yup Validation</Badge.Item>
                </Badge>

                <Title>React Form</Title>
            </div>

            <Line />
            <Form onSubmit={onSubmit} />
        </section>
    );
};
