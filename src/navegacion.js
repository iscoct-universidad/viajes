import React from 'react';

export default class Navegacion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			idLista: this.props.idLista,
			className: this.props.className,
			secciones: this.props.secciones
		}
	}
	
	render() {
		const lista = this.state.secciones.map((sec) =>
				<li className={this.state.className}>{sec}</li>
			);
		
		return(
			<nav>
				<ul id={ this.state.idLista }>
					{lista}
				</ul>
			</nav>	
		);
	}
}
