import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import './ColorPickerForm.scss';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { newColorName: '', currentColor: 'teal' };
	}

	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);

		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}

	addNewColor = () => {
		const newColor = {
			color : this.state.currentColor,
			name  : this.state.newColorName
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	};

	updateCurrentColor = (newColor) => {
		this.setState({ currentColor: newColor.hex });
	};

	handleChange = (evt) => {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
		const { paletteFull } = this.props;
		const { currentColor, newColorName } = this.state;

		return (
			<div className="ColorPickerForm">
				<ChromePicker color={currentColor} onChangeComplete={this.updateCurrentColor} />
				<ValidatorForm className="add-color-form" onSubmit={this.addNewColor} instantValidate={false}>
					<TextValidator
						className="add-color-input"
						value={newColorName}
						name="newColorName"
						onChange={this.handleChange}
						variant="filled"
						margin="normal"
						placeholder="Color Name"
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[
							'This field is required.',
							'Color name must be unique.',
							'Color already used.'
						]}
					/>
					<Button
						variant="contained"
						color="primary"
						style={{ background: paletteFull ? 'grey' : currentColor }}
						type="submit"
						disabled={paletteFull}
					>
						{paletteFull ? 'Palette Full' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default ColorPickerForm;
