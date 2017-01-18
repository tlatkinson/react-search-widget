// @flow

const inputReducer = (inputState = {}, action) => {
	switch (action.type) {
		case 'INPUT_KEYUP':
				return inputKeyUp(inputState, action.property, action.value);
			break;
		default:
			return inputState;
	}
};

export default inputReducer;

export const getFieldData = (inputState, property) => {
	return Object.assign({}, inputState[property]);
};

const inputKeyUp = (inputState, property, value) => {
	return {
		...inputState,
		[property]: {
			value,
			errorText: validate(property, value)
		}
	}
};

const validate = (property, value) => {
	switch(property) {
		case 'email':
			return value.indexOf('@') !== -1 ? '' : 'missing @';
			break;
		default:
			return false;
	}
};