// @flow

import React from 'react';

const FieldError = ({ errorText }) => {
	return (
		<div className="error">
			<b>{errorText}</b>
		</div>
	)
};

export default FieldError;