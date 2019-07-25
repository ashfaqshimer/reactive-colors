import React, { Component } from 'react';
import './MiniPalette.scss';

class MiniPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { name, emoji, colors } = this.props;
		return (
			<div className='MiniPalette'>
				<div className='colors-container'>
					{colors.map((color) => {
						return (
							<div
								key={color.name}
								className='color-box'
								style={{ background: color.color }}
							/>
						);
					})}
				</div>
				<p>
					{name} <span>{emoji}</span>
				</p>
			</div>
		);
	}
}

export default MiniPalette;
