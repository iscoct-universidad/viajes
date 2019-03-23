import React from 'react';
import NavegacionLateral from './navegacionLateral';
import Main from './main';
import './principal.css';

export default class Principal extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			id: this.props.id,
			navegacionLateral: this.props.navegacionLateral,
			main: this.props.main
		}
	}
	
	render() {
		return(
			<section id={ this.state.id }>
				{ this.state.navegacionLateral }
				{ this.state.main }
			</section>
		);
	}
}
