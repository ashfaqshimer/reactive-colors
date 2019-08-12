import React, { Component } from 'react';
import MiniPalette from '../MiniPalette/MiniPalette';
import { Link } from 'react-router-dom';

import './PaletteList.scss';
import Logo from '../Logo/Logo';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		this.props.history.push(`/palette/${id}`);
	}

	render() {
		const { palettes } = this.props;
		return (
			<div className='PaletteList'>
				<Logo />
				<Link className='create-palette-btn' to='/palette/new'>
					Create Palette
				</Link>
				<div className='palettes-container'>
					{palettes.map((palette) => {
						return (
							<MiniPalette
								key={palette.id}
								id={palette.id}
								name={palette.paletteName}
								colors={palette.colors}
								emoji={palette.emoji}
								handleClick={() => this.handleClick(palette.id)}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default PaletteList;
