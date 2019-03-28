import React from 'react';
import './css/cabecera.css';
import './css/comun.css';
import avion from './img/avion.jpg';

export default class Cabecera extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			className: this.props.className,
			id: this.props.id,
			navegacionSuperior: this.props.navegacionSuperior
		};
	}
	
	render() {
		return (
			<header className={ this.props.className } id={ this.props.id } >
		        <a href="principal.html"><img id="imagenAvion" src={ avion } alt="Logotipo de la agencia de viajes"/></a>
		        <h1 id="cabeceraPrincipal">Viajes</h1>
		        
		        { this.state.navegacionSuperior }
		    </header>
		);
	}
}
