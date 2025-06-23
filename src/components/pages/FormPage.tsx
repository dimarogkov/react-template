import { EnumTitle } from '../../types/enums';
import { Form } from '../elements';
import { Badge, Line, Title } from '../ui';

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

                        <Title titleType={EnumTitle.h2}>React Form</Title>
                    </div>

                    <Line />
                    <Form onSubmit={onSubmit} />
                </div>
            </div>
        </section>
    );
};
