import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';

function App() {
	console.log(generatePalette(seedColors[4]));
	return (
		<div className='App'>
			<Palette palette={generatePalette(seedColors[4])} />
		</div>
	);
}

export default App;
