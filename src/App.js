import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';
import PaletteList from './components/PaletteList/PaletteList';
import PaletteShades from './components/PaletteShades/PaletteShades';
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';

function App() {
	const findPalette = (id) => {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	};
	return (
		<Switch>
			<Route exact path='/palette/new' render={() => <NewPaletteForm />} />
			<Route
				exact
				path='/'
				render={(routeProps) => <PaletteList {...routeProps} palettes={seedColors} />}
			/>
			<Route
				exact
				path='/palette/:id'
				render={(routeProps) => (
					<Palette
						{...routeProps}
						palette={generatePalette(findPalette(routeProps.match.params.id))}
					/>
				)}
			/>
			<Route
				exact
				path='/palette/:paletteId/:colorId'
				render={(routeProps) => (
					<PaletteShades
						colorId={routeProps.match.params.colorId}
						palette={generatePalette(findPalette(routeProps.match.params.paletteId))}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
