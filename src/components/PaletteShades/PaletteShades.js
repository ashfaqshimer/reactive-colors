import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PaletteShades.scss';
import ColorBox from '../ColorBox/ColorBox';
import Navbar from '../Navbar/Navbar';

class PaletteShades extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
		this.state = { colorMode: 'hex' };
		this.changeMode = this.changeMode.bind(this);
	}
	changeMode(val) {
		this.setState({ colorMode: val });
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	}
	render() {
		const { paletteName, emoji, id } = this.props.palette;
		const colorBoxes = this._shades.map((color) => {
			return (
				<ColorBox key={color.name} name={color.name} color={color[this.state.colorMode]} />
			);
		});

		return (
			<div className='PaletteShades'>
				<Navbar changeMode={this.changeMode} />
				<div className='palette-colors'>
					{colorBoxes}
					<div className='back-box'>
						<Link className='back-btn' to={`/palette/${id}`}>
							Go Back
						</Link>
					</div>
				</div>
				<footer className='palette-footer'>
					<p>
						{paletteName} <span>{emoji}</span>
					</p>
				</footer>
			</div>
		);
	}
}

export default PaletteShades;
