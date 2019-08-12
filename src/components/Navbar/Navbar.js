import React, { Component } from 'react';

import Slider from 'rc-slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import './Navbar.scss';
import Logo from '../Logo/Logo';
import 'rc-slider/assets/index.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { colorMode: 'hex', open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
	}

	handleSnackbarClose(evt, reason) {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({ open: false });
	}

	handleFormatChange(evt) {
		const colorMode = evt.target.value;
		this.setState({ colorMode, open: true });
		this.props.changeMode(colorMode);
	}

	render() {
		const { level, changeLevel } = this.props;
		const { colorMode, open } = this.state;
		return (
			<nav className='Navbar'>
				<Logo />
				{this.props.slider && (
					<div className='slider-container'>
						<div className='level-indicator'>
							<p>
								Level : <span>{level}</span>
							</p>
						</div>
						<div className='slider'>
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								step={100}
								onAfterChange={changeLevel}
							/>
						</div>
					</div>
				)}
				<div className='select-container'>
					<Select value={colorMode} onChange={this.handleFormatChange}>
						<MenuItem value='hex'>Hex - #ffffff</MenuItem>
						<MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{
						vertical   : 'bottom',
						horizontal : 'left'
					}}
					open={open}
					autoHideDuration={1500}
					onClose={this.handleSnackbarClose}
					ContentProps={{
						'aria-describedby' : 'message-id'
					}}
					message={
						<span id='message-id'>{`Format changed to ${colorMode.toUpperCase()}`}</span>
					}
					action={[
						<IconButton
							key='close'
							aria-label='Close'
							color='inherit'
							className=''
							onClick={this.handleSnackbarClose}
						>
							<CloseIcon />
						</IconButton>
					]}
				/>
			</nav>
		);
	}
}

export default Navbar;
