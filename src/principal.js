import React from 'react';
import './css/principal.css';

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
				<aside className="borde" id="navegacionLateral">
					{ this.state.navegacionLateral }
				</aside>
				{ this.state.main }
			</section>
		);
	}
}
