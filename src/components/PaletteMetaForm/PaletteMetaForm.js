import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = { paletteNameFormOpen: true, emojiFormOpen: false, newPaletteName: '' };
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handleSubmit = (emoji) => {
		const newPalette = {
			paletteName : this.state.newPaletteName,
			emoji       : emoji.native
		};
		this.props.savePalette(newPalette);
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	toggleEmojiForm = () => {
		this.setState({ emojiFormOpen: true, paletteNameFormOpen: false });
	};

	render() {
		const { newPaletteName, emojiFormOpen, paletteNameFormOpen } = this.state;
		const { savePalette, handleClose } = this.props;
		return (
			<div>
				<Dialog open={emojiFormOpen} onClose={handleClose}>
					<DialogTitle id='form-dialog-title'>Choose Emoji</DialogTitle>
					<Picker title='Choose an emoji' onSelect={this.handleSubmit} />
				</Dialog>
				<Dialog
					open={paletteNameFormOpen}
					onClose={handleClose}
					aria-labelledby='form-dialog-title'
				>
					<DialogTitle id='form-dialog-title'>Save Palette</DialogTitle>
					<ValidatorForm className='validator-form' onSubmit={this.toggleEmojiForm}>
						<DialogContent>
							<DialogContentText>
								Choose a suitable name for the Palette you just created.
							</DialogContentText>
							<TextValidator
								label='Palette Name'
								value={newPaletteName}
								name='newPaletteName'
								fullWidth
								margin='normal'
								onChange={this.handleChange}
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[
									'Enter a Palette Name',
									'Palette name already taken'
								]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleClose} color='primary'>
								Cancel
							</Button>
							<Button variant='contained' color='primary' type='submit'>
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteMetaForm;
