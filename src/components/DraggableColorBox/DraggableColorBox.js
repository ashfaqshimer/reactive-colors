import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteIcon from '@material-ui/icons/Delete';
import './DraggableColorBox.scss';

class DraggableColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { name, color, handleDelete } = this.props;
		return (
			<div className='DraggableColorBox' style={{ background: color }}>
				<div className='box-info'>
					<span>{name}</span>
					<DeleteIcon className='delete-icon' onClick={handleDelete} />
				</div>
			</div>
		);
	}
}

export default SortableElement(DraggableColorBox);
