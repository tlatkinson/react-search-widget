// @flow

import React, { Component } from 'react';

const AddRemoveButton = ({onAddRemoveClick, added, copy}) => {

	const onClick = (e) => {
		e.preventDefault();

		onAddRemoveClick();

	};

	return (
		<a href="#" className={'button ' + added ? 'remove' : 'add'} onClick={onClick}>{copy}</a>
	)
};

export default AddRemoveButton;