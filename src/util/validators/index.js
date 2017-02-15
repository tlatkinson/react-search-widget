export const required = (value) => {
	if(value === undefined
			|| value === null
			|| value.trim() === '') {
		return 'Required';
	}

	return [];
};

export const size = (min, max) => {
	return (value) => {
		let errors = [];

		if(min && value && value.length < min) {
			errors.push(`Must be at least ${min} characters`)
		}
		if(max && value && value.length > max) {
			errors.push(`Must be no more then ${max} characters`)
		}

		return errors;
	}
};

export const emailValidator = (value) => !value || (value && value.includes('@')) ? [] : 'Invalid email address';
