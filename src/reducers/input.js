// @flow

const inputReducer = (inputState = {}, action) => {
	switch (action.type) {
		case 'VALIDATE':
			return updateState(inputState, action.property, action.value, action.validators);
		default:
			return inputState;
	}
};

export default inputReducer;

export const getFieldData = (inputState, property) => {
	return Object.assign({}, inputState[property]);
};

const updateState = (inputState, property, value, validators) => {
	return {
		...inputState,
		[property]: {
			value,
			errors: validate(value, validators)
		}
	}
};

const validate = (value, validators) => {
	const errors = [];

	if(validators) {
		validators.forEach(validator => {
			errors.push(validator(value));
		});
	}

	return errors.reduce((accumulator, current) => accumulator.concat(current), []);
};