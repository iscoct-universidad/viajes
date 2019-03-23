import React from 'react';
import './comun.css';
import './main.css';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			className: this.props.className,
			id: this.props.id,
			eventos: this.props.eventos
		};
	}
	
	render() {
		const elementosEventos = this.state.eventos;
		
		return(
			<main className={this.state.className} id={this.state.id}>
				{ elementosEventos }
			</main>
		);
	}
}
