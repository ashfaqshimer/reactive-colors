import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';
import PaletteList from './components/PaletteList/PaletteList';
import PaletteShades from './components/PaletteShades/PaletteShades';
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { palettes: seedColors };
		this.findPalette = this.findPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
	}

	findPalette(id) {
		return this.state.palettes.find((palette) => {
			return palette.id === id;
		});
	}

	savePalette(palette) {
		this.setState({ palettes: [ ...this.state.palettes, palette ] });
		console.log(palette);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path='/palette/new'
					render={(routeProps) => (
						<NewPaletteForm
							savePalette={this.savePalette}
							palettes={this.state.palettes}
							{...routeProps}
						/>
					)}
				/>
				<Route
					exact
					path='/'
					render={(routeProps) => (
						<PaletteList {...routeProps} palettes={this.state.palettes} />
					)}
				/>
				<Route
					exact
					path='/palette/:id'
					render={(routeProps) => (
						<Palette
							{...routeProps}
							palette={generatePalette(this.findPalette(routeProps.match.params.id))}
						/>
					)}
				/>
				<Route
					exact
					path='/palette/:paletteId/:colorId'
					render={(routeProps) => (
						<PaletteShades
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
