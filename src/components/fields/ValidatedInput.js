// @flow

import React from 'react';
import FieldError from './FieldError';
import {connect} from 'react-redux';

const ValidatedInput = ({ fieldName, errorText, onKeyUpEvent }) => {
	const onKeyUp = (e) => {
		onKeyUpEvent(fieldName, e.target.value);
	};

	return (
		<div>
			<FieldError errorText={errorText} />
			<input name={fieldName} type="text" onKeyUp={onKeyUp} />
		</div>
	)
};

export default ValidatedInput;