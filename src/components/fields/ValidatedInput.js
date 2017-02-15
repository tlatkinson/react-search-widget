// @flow

import React from 'react';
import FieldError from './FieldError';

const ValidatedInput = ({ fieldName, errors = [], onKeyUpEvent }) => {
	const onKeyUp = (e) => {
		onKeyUpEvent(fieldName, e.target.value);
	};

	return (
		<div>
			{errors.map(error =>
				<FieldError errorText={error} />
			)}
			<input name={fieldName} type="text" onKeyUp={onKeyUp} />
		</div>
	)
};

export default ValidatedInput;