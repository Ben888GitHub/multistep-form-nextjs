import * as yup from 'yup';

export const schema = yup.object({
	firstName: yup
		.string()
		.required('First name is required')
		.min(3, 'First name must be at least 3 letters long')
		.max(15, 'First name must not be 15 letters long'),
	email: yup
		.string()
		.email('Please enter a valid email address')
		// .matches(/.+@.+/, 'Please enter a valid email address')
		.max(100, 'Email is too long')
		.required('Email is required'),
	city: yup.string().required('City is required'),
	region: yup.string().required('State or Province is required'),
	postalCode: yup
		.number()
		.required('Post Code is required')
		.typeError('Invalid Post Code')
});
