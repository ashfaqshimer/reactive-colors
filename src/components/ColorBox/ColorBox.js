import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';

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
		const { color, name, paletteId, colorId } = this.props;
		const isDarkColor = chroma(color).luminance() <= 0.11;
		return (
			<CopyToClipboard text={color} onCopy={this.handleCopy}>
				{this.state.copied ? (
					<div
						className={`ColorBox copied ${isDarkColor && 'light-text'}`}
						style={{ background: color }}
					>
						<h3 className={isDarkColor ? 'light-text' : ''}>copied</h3>
						<p className={isDarkColor ? 'light-text' : ''}>{color}</p>
					</div>
				) : (
					<div className='ColorBox' style={{ background: color }}>
						<h3 className='copy-button'>Copy</h3>
						<div className='color-info'>
							<span className={isDarkColor ? 'light-text' : ''}>{name}</span>
							{this.props.moreBtn && (
								<Link
									className='more-btn'
									to={`/palette/${paletteId}/${colorId}`}
									onClick={(e) => e.stopPropagation()}
								>
									More
								</Link>
							)}
						</div>
					</div>
				)}
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
