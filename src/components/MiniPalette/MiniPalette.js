import React, { Component } from 'react';
import './MiniPalette.scss';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(evt) {
		evt.stopPropagation();
		this.props.handleDelete();
	}
	render() {
		const { name, emoji, colors, handleClick } = this.props;
		return (
			<div className='MiniPalette' onClick={handleClick}>
				<DeleteIcon className='DeleteIcon' onClick={this.handleDelete} />
				<div className='colors-container'>
					{colors.map((color) => {
						return (
							<div
								key={color.name}
								className='color-box'
								style={{ background: color.color }}
							/>
						);
					})}
				</div>
				<p className='palette-name'>
					{name} <span>{emoji}</span>
				</p>
			</div>
		);
	}
}

export default MiniPalette;
