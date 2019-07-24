import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';
import PaletteList from './components/PaletteList/PaletteList';

function App() {
	const findPalette = (id) => {
		return seedColors.find((palette) => {
			return palette.id === id;
		});
	};
	return (
		<Switch>
			<Route exact path='/' render={() => <PaletteList palettes={seedColors} />} />
			<Route
				exact
				path='/palette/:id'
				render={(routeProps) => (
					<Palette palette={generatePalette(findPalette(routeProps.match.params.id))} />
				)}
			/>
		</Switch>
		// <div className='App'>
		// 	<Palette palette={generatePalette(seedColors[4])} />
		// </div>
	);
}

export default App;
