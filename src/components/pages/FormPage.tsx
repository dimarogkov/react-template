import { BackLink, Breadcrumbs, Form } from '../elements';
import { Badge, Line, Title } from '../ui';

export const FormPage = () => {
    const onSubmit = (data: any) => console.log(data);

    return (
        <section className='relative w-full'>
            <div className='flex flex-col gap-6 w-full'>
                <BackLink />
                <Breadcrumbs />

                <Badge>
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
