// @flow

import React from 'react';
import {connect} from 'react-redux';
import {validate} from './../../actions';
import {getFieldData} from './../../reducers/input';
import {required, size, emailValidator} from './../../util/validators';
import ValidatedInput from './../fields/ValidatedInput';

const mapStateToProps = (state) => {
	return {
		fieldName: 'email',
		errors: getFieldData(state.inputState, 'email').errors,
	}
};

const mapDispatchToProps = (dispatch) => ({
	onKeyUpEvent(fieldName, value) {
		dispatch(validate(fieldName, value, [
			required,
			size(5, 10),
			emailValidator
		]));
	},
});

const EmailField = connect(
	mapStateToProps,
	mapDispatchToProps
)(ValidatedInput);

export default EmailField;