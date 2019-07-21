import React, { Component } from 'react';

import './ColorBox.scss';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { color, name } = this.props;
		return (
			<div className='ColorBox' style={{ background: color }}>
				<h3 className='copy-button'>Copy</h3>
				<div className='color-info'>
					<span>{name}</span>
					<span>More</span>
				</div>
			</div>
		);
	}
}

export default ColorBox;
