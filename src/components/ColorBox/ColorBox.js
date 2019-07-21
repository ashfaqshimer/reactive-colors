import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.scss';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { color, name } = this.props;
		return (
			<CopyToClipboard text={color}>
				<div className='ColorBox' style={{ background: color }}>
					<h3 className='copy-button'>Copy</h3>
					<div className='color-info'>
						<span>{name}</span>
						<span>More</span>
					</div>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
