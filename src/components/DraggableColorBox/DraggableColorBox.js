import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import './DraggableColorBox.scss';

class DraggableColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { name, color } = this.props;
		return (
			<div className='DraggableColorBox' style={{ background: color }}>
				{name}
			</div>
		);
	}
}

export default DraggableColorBox;
