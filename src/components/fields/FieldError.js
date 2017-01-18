// @flow

import React, {Component} from 'react';

let FieldError = ({ errorText  }) => {
	return (
		<span style={{display: (errorText && errorText.length === 0) ? 'none': 'inline'}}>
			<b>{errorText && errorText.length === 0 ? '' : errorText}</b>
		</span>
	)
};

export default FieldError;