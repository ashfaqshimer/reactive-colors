import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from '../MiniPalette/MiniPalette';

import './PaletteList.scss';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { palettes } = this.props;
		return (
			<div className='PaletteList'>
				<h1>PaletteList Component</h1>
				<div className='palettes-container'>
					{palettes.map((palette) => {
						return (
							<Link key={palette.id} to={`/palette/${palette.id}`}>
								<MiniPalette
									name={palette.paletteName}
									colors={palette.colors}
									emoji={palette.emoji}
								/>
							</Link>
						);
					})}
				</div>
			</div>
		);
	}
}

export default PaletteList;
