import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.scss';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.handleCopy = this.handleCopy.bind(this);
	}

	handleCopy() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const { color, name } = this.props;
		return (
			<CopyToClipboard text={color} onCopy={this.handleCopy}>
				{this.state.copied ? (
					<div className='ColorBox copied' style={{ background: color }}>
						<h3>copied</h3>
						<p>{color}</p>
					</div>
				) : (
					<div className='ColorBox' style={{ background: color }}>
						<h3 className='copy-button'>Copy</h3>
						<div className='color-info'>
							<span>{name}</span>
							<span>More</span>
						</div>
					</div>
				)}
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
