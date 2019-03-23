import React from 'react';
import Navegacion from './navegacion';
import './comun.css';
import './navegacionLateral.css';

export default class NavegacionSuperior extends React.Component {
	render() {
		const lista = [ "Check-in", "Tus reservas", "Estados vuelos", "Evento" ];
		
		return (
			<aside class="borde" id="navegacionLateral">
				<Navegacion idLista="listaLateral" className="elementoLateral" secciones = {lista}/>
			</aside>
		);
	}
}
