import React from 'react';
import './evento.css';

export default class Evento extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			enlace: this.props.enlace,
			className: this.props.className,
			imagenFuente: this.props.imagenFuente,
			ciudad: this.props.ciudad
		}
	}
	
	render() {
		return(
			<div><a href={ this.state.enlace }><img class={ this.state.className } src={ this.state.imagenFuente } alt={ this.state.ciudad }/><p class="ciudad">{ this.state.ciudad }</p></a></div>
        );
	}
}
