import React, { Component } from 'react';
import MiniPalette from '../MiniPalette/MiniPalette';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue, red } from '@material-ui/core/colors';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

import './PaletteList.scss';
import Logo from '../Logo/Logo';

class PaletteList extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false, deletingId: '' };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(id) {
		this.props.history.push(`/palette/${id}`);
	}

	handleClose = () => {
		this.setState({ open: false, deletingId: '' });
	};

	handleOpen = (id) => {
		this.setState({ open: true, deletingId: id });
	};

	handleDelete = () => {
		this.props.handleDelete(this.state.deletingId);
		this.handleClose();
	};

	render() {
		const { open } = this.state;
		const { palettes } = this.props;

		return (
			<div className='PaletteList'>
				<Logo />
				<TransitionGroup className='palettes-container'>
					{palettes.map((palette) => {
						return (
							<CSSTransition key={palette.id} timeout={1000} classNames='item'>
								<MiniPalette
									key={palette.id}
									id={palette.id}
									name={palette.paletteName}
									colors={palette.colors}
									emoji={palette.emoji}
									handleClick={() => this.handleClick(palette.id)}
									// handleDelete={() => handleDelete(palette.id)}
									openDialog={() => this.handleOpen(palette.id)}
								/>
							</CSSTransition>
						);
					})}
				</TransitionGroup>
				<Link className='create-palette-btn' to='/palette/new'>
					Create New Palette
				</Link>

				<Dialog
					onClose={this.handleClose}
					aria-labelledby='delete-dialog-title'
					open={open}
				>
					<DialogTitle id='delete-dialog-title'>
						Are you sure you want to delete this palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor : blue[100],
										color           : blue[600]
									}}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Delete' />
						</ListItem>

						<ListItem button onClick={this.handleClose}>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor : red[100],
										color           : red[600]
									}}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText primary='Cancel' />
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default PaletteList;
