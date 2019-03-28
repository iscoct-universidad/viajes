import React from 'react';
import './css/evento.css';

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
			<div><a href={ this.state.enlace }><img className={ this.state.className } src={require(`${this.state.imagenFuente}`)} alt={ this.state.ciudad }/><p className="ciudad">{ this.state.ciudad }</p></a></div>
        );
	}
}
