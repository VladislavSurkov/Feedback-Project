import * as Yup from 'yup';

export const ValidRegister = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email address')
        .notOneOf(['.ru'], 'Domain ".ru" is prohibited')
        .required('Required field.'),
    name: Yup.string()
        .min(3, 'Name must contain at least 3 characters')
        .max(30, 'Name must contain at maximum 30 characters')
        .required('Required field.'),
    username: Yup.string()
        .min(3, 'Username must contain at least 3 characters')
        .max(30, 'Username must contain at maximum 30 characters')
        .required('Required field.'),
    password: Yup.string()
        .matches(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/, 'Password must contain at least one digit')
        .min(8, 'Password must be at least 8 characters long')
        .max(16, 'Password must not exceed 16 characters')
        .required('Required field.'),
});

export const ValidLogin = Yup.object().shape({
    email: Yup.string()
        .email('Enter a valid email address')
        .notOneOf(['.ru'], 'Domain ".ru" is prohibited')
        .required('Required field.'),
    password: Yup.string()
        .matches(/[0-9a-zA-Z]*\d[0-9a-zA-Z]*/, 'Password must contain at least one digit')
        .min(8, 'Password must be at least 8 characters long')
        .max(16, 'Password must not exceed 16 characters')
        .required('Required field.'),
});
