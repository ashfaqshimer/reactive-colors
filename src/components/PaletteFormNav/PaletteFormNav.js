import React, { Component } from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Link } from 'react-router-dom';

import './PaletteFormNav.scss';
import PaletteMetaForm from '../PaletteMetaForm/PaletteMetaForm';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { formShowing: false };
	}

	handleClickOpen = () => {
		this.setState({ formShowing: true });
	};

	handleClose = () => {
		this.setState({ formShowing: false });
	};

	render() {
		const { formShowing } = this.state;
		const { classes, open, savePalette, palettes, handleDrawerOpen } = this.props;

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
							<ChevronRightIcon />
						</IconButton>
						<Typography variant='h6' color='inherit' noWrap>
							Create Palette
						</Typography>
						<div className='button-group'>
							<Link to='/'>
								<Button variant='contained' color='secondary'>
									Go Back
								</Button>
							</Link>
							<Button
								variant='contained'
								color='primary'
								onClick={this.handleClickOpen}
							>
								Save Palette
							</Button>
						</div>
						{formShowing && (
							<PaletteMetaForm
								palettes={palettes}
								savePalette={savePalette}
								handleClose={this.handleClose}
							/>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default PaletteFormNav;
