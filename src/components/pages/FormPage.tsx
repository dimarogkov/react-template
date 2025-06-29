import { Form } from '../elements';
import { Badge, Separator, Title } from '../ui';

export const FormPage = () => {
    const onSubmit = (data: any) => console.log(data);

    return (
        <section className='relative w-full'>
            <div className='container'>
                <div className='w-full'>
                    <div className='flex flex-col gap-6 w-full'>
                        <div className='flex flex-wrap gap-2 w-full'>
                            <Badge>React Hook Form</Badge>
                            <Badge>Yup Validation</Badge>
                        </div>

                        <Title size='h2'>React Form</Title>
                    </div>

                    <Separator className='my-5' />
                    <Form onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};
