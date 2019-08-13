import React, { Component } from 'react';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

import './PaletteFormNav.scss';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { newPaletteName: '' };
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		const { classes, open, savePalette, handleDrawerOpen } = this.props;
		const { newPaletteName } = this.state;
		return (
			<div className='PaletteFormNav'>
				<CssBaseline />
				<AppBar
					position='fixed'
					color='default'
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})} 
				>
					<Toolbar className='Toolbar' disableGutters={!open}>
						<IconButton
							color='inherit'
							aria-label='Open drawer'
							onClick={handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							Create Palette
						</Typography>
						<ValidatorForm
							className='validator-form'
							onSubmit={() => savePalette(newPaletteName)}
						>
							<TextValidator
								label='Palette Name'
								value={newPaletteName}
								name='newPaletteName'
								onChange={this.handleChange}
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[
									'Enter a Palette Name',
									'Palette name already taken'
								]}
							/>
							<div className='button-group'>
								<Link to='/'>
									<Button variant='contained' color='secondary'>
										Go Back
									</Button>
								</Link>
								<Button variant='contained' color='primary' type='submit'>
									Save Palette
								</Button>
							</div>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default PaletteFormNav;
