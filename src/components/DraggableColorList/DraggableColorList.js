import React, { Component } from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from '../DraggableColorBox/DraggableColorBox';

import './DraggableColorList.scss';

class DraggableColorList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { colors, handleDelete } = this.props;
		return (
			<div className='DraggableColorList'>
				{colors.map((color, i) => (
					<DraggableColorBox
						index={i}
						key={color.name}
						color={color.color}
						name={color.name}
						handleDelete={() => handleDelete(color.name)}
					/>
				))}
			</div>
		);
	}
}

export default SortableContainer(DraggableColorList);
