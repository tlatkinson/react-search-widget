// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

let AddRemoveButton = ({onAddRemoveClick, added, copy}) => {

	const onClick = (e) => {
		e.preventDefault();

		console.log(added);

		onAddRemoveClick();

	};

	return (
		<a href="#" className={'button ' + added ? 'remove' : 'add'} onClick={onClick}>{copy}</a>
	)
};

AddRemoveButton = connect()(AddRemoveButton);

export default AddRemoveButton;