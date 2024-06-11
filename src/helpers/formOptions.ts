import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup
    .object({
        name: yup.string().required('Missing name'),
        email: yup.string().required('Missing email').email('Invalid email format'),
        password: yup.string().required('Missing password'),
    })
    .required();

export const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
        name: '',
        email: '',
        password: '',
    },
};
