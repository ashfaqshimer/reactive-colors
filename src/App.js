import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors';
import { generatePalette } from './helpers/colorHelpers';
import PaletteList from './components/PaletteList/PaletteList';
import PaletteShades from './components/PaletteShades/PaletteShades';
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './components/Page/Page';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedColors };
		this.findPalette = this.findPalette.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}

	findPalette(id) {
		return this.state.palettes.find((palette) => {
			return palette.id === id;
		});
	}

	deletePalette(id) {
		const filteredPalettes = this.state.palettes.filter((palette) => palette.id !== id);
		this.setState({ palettes: filteredPalettes }, this.syncLocalStorage);
	}

	savePalette(palette) {
		this.setState({ palettes: [ ...this.state.palettes, palette ] }, this.syncLocalStorage);
	}

	syncLocalStorage() {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}

	render() {
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="page" timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={this.state.palettes}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<Page>
											<PaletteList
												{...routeProps}
												palettes={this.state.palettes}
												handleDelete={this.deletePalette}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<Page>
											<Palette
												{...routeProps}
												palette={generatePalette(this.findPalette(routeProps.match.params.id))}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<Page>
											<PaletteShades
												colorId={routeProps.match.params.colorId}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
