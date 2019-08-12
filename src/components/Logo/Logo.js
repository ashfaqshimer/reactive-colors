import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

class Logo extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='Logo'>
				<Link to='/'>
					<h3 className='logo-title'>
						<span className='primary-text'>Reactive</span> Colors
					</h3>
				</Link>
			</div>
		);
	}
}

export default Logo;
