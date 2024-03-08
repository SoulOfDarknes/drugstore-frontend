import * as yup from 'yup';

export const checkoutFormSchema = yup.object().shape({
    name: yup.string().required('Name is required.'),
    email: yup.string().email('Email is not valid.').required('Email is required.'),
    phone: yup.string().matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Phone number is not valid.').required('Phone number is required.'),
    address: yup.string().required('Address is required.'),
});
