export const basicInfo = (errors) => {
	return [
		{
			label: 'First name',
			error: errors.firstName,
			value: 'firstName'
		},
		{
			label: 'Last name',
			error: errors.lastName,
			value: 'lastName'
		},
		{
			label: 'Email address',
			error: errors.email,
			value: 'email'
		}
	];
};

export const locationInfo = (errors) => {
	return [
		{
			label: 'City',
			error: errors.city,
			value: 'city'
		},
		{
			label: 'State / Province',
			error: errors.region,
			value: 'region'
		},
		{
			label: 'ZIP / Postal code',
			error: errors.postalCode,
			value: 'postalCode'
		}
	];
};
