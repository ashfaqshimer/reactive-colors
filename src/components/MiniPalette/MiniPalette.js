import React, { PureComponent } from 'react';
import './MiniPalette.scss';
import DeleteIcon from '@material-ui/icons/Delete';

class MiniPalette extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleDelete(evt) {
		evt.stopPropagation();
		this.props.openDialog(this.props.id);
	}

	handleClick() {
		this.props.handleClick(this.props.id);
	}

	render() {
		const { name, emoji, colors } = this.props;
		console.log('rendering:', name);
		return (
			<div className="MiniPalette" onClick={this.handleClick}>
				<DeleteIcon className="DeleteIcon" onClick={this.handleDelete} />
				<div className="colors-container">
					{colors.map((color) => {
						return <div key={color.name} className="color-box" style={{ background: color.color }} />;
					})}
				</div>
				<p className="palette-name">
					{name} <span>{emoji}</span>
				</p>
			</div>
		);
	}
}

export default MiniPalette;
