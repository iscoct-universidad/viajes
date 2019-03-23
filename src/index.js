import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Pie from './pie';
import Cabecera from './cabecera';
import NavegacionSuperior from './navegacionSuperior';
import NavegacionLateral from './navegacionLateral';
import Main from './main';
import Principal from './principal';
import Evento from './evento';
import roma from './img/roma.jpg';
import londres from './img/londres.jpg';
import paris from './img/paris.jpeg';

class Pagina extends React.Component {
	constructor(props) {
		super(props);
		
		const navegacionSuperior = <NavegacionSuperior />;
		const navegacionLateral = <NavegacionLateral />;
	
		const tuplas = [ { enlace: "https://www.google.es", imagenFuente: paris, ciudad: "París" },
			{ enlace: "https://www.google.es", imagenFuente: roma, ciudad: "Roma" },
			{ enlace: "https://www.google.es", imagenFuente: londres, ciudad: "Londres" } ];
			
		let eventos = new Array();

		tuplas.forEach( (tupla) => {
			console.log("Enlace: " + tupla.enlace);
			console.log("Ciudad: " + tupla.ciudad);
			
			eventos.push(<Evento enlace={tupla.enlace} className="imagenes"
				imagenFuente={tupla.imagenFuente} ciudad={tupla.ciudad} />);
		});
		
		const main = <Main className="borde" id="conjuntoEventos" eventos={eventos}/>;
		
		this.state = {
			cabecera: <Cabecera className="borde" id="cabecera" navegacionSuperior={navegacionSuperior}/>,
			principal: <Principal id="principal"
	navegacionLateral={ navegacionLateral } main={main} />,
			pie: <Pie className="borde" id="pie"/>
		}
	}
	
	render() {
		return(
			<div>{ this.state.cabecera }
			{ this.state.principal }
			{ this.state.pie }</div>
		);
	}
}

ReactDOM.render(<Pagina />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
