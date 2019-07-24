import React, { Component } from 'react';

import './Palette.scss';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, colorMode: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeMode = this.changeMode.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeMode(val) {
		this.setState({ colorMode: val });
	}

	render() {
		const { colors, paletteName, emoji } = this.props.palette;
		const { level, colorMode } = this.state;
		const colorBoxes = colors[level].map((color) => {
			return <ColorBox key={color.id} color={color[colorMode]} name={color.name} />;
		});
		return (
			<React.Fragment>
				<Navbar level={level} changeLevel={this.changeLevel} changeMode={this.changeMode} />
				<div className='Palette'>
					<div className='palette-colors'>{colorBoxes}</div>
				</div>
				<footer className='palette-footer'>
					<p>
						{paletteName} <span>{emoji}</span>
					</p>
				</footer>
			</React.Fragment>
		);
	}
}

export default Palette;
