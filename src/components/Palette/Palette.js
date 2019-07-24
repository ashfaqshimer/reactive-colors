import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Palette.scss';
import ColorBox from '../ColorBox/ColorBox';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	render() {
		const { palette } = this.props;
		const { level } = this.state;
		const colorBoxes = palette.colors[level].map((color) => {
			return <ColorBox key={color.name} color={color.hex} name={color.name} />;
		});
		return (
			<React.Fragment>
				<div className='slider'>
					<Slider
						defaultValue={level}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.changeLevel}
					/>
				</div>
				<div className='Palette'>
					<div className='palette-colors'>{colorBoxes}</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Palette;
