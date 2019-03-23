import React from 'react';
import Navegacion from './navegacion';
import './comun.css';
import './navegacionSuperior.css';

export default class NavegacionSuperior extends React.Component {
	render() {
		const lista = ["Viaja", "Tus vuelos", "Antes de viajar", "Principal" ];
		
		return (
			<Navegacion idLista="menuCabecera" className="elementoMenu" secciones = {lista}/>
		);
	}
}
