import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import './DraggableColorBox.scss';

class DraggableColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='DraggableColorBox' style={{ background: this.props.color }}>
				{this.props.color}
			</div>
		);
	}
}

export default DraggableColorBox;
