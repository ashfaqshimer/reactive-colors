import React, { Component } from 'react';

import './Palette.scss';
import ColorBox from '../ColorBox/ColorBox';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { colors } = this.props;
		const colorBoxes = colors.map((color) => {
			return <ColorBox key={color.name} color={color.color} name={color.name} />;
		});
		return (
			<div className='Palette'>
				<div className='palette-colors'>{colorBoxes}</div>
			</div>
		);
	}
}

export default Palette;
