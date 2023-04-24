export const basicInfo = (errors) => {
	const { firstName, lastName, email } = errors;

	return [
		{
			label: 'First name',
			error: firstName,
			value: 'firstName'
		},
		{
			label: 'Last name',
			error: lastName,
			value: 'lastName'
		},
		{
			label: 'Email address',
			error: email,
			value: 'email'
		}
	];
};

export const locationInfo = (errors) => {
	const { city, region, postalCode } = errors;

	return [
		{
			label: 'City',
			error: city,
			value: 'city'
		},
		{
			label: 'State / Province',
			error: region,
			value: 'region'
		},
		{
			label: 'ZIP / Postal code',
			error: postalCode,
			value: 'postalCode'
		}
	];
};
