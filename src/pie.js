import React from 'react';
import './pie.css';
import './comun.css';

export default class Pie extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			className: this.props.className,
			id: this.props.id
		};
	}
	
	render() {
		return (
			<div className={ this.state.className } id={ this.state.id }>&copy; 2019 SIBW</div>
		);
	}
}
