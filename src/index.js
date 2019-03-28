import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Pie from './pie';
import Cabecera from './cabecera';
import Navegacion from './navegacion';
import Main from './main';
import Principal from './principal';
import './css/navegacionLateral.css';
import './css/navegacionSuperior.css';

class Pagina extends React.Component {
	constructor(props) {
		super(props);
		
		const navegacionSuperior = <Navegacion idLista="menuCabecera" className="elementoMenu" tipo="Superior"/>
		const navegacionLateral = <Navegacion idLista="listaLateral" className="elementoLateral" tipo="Lateral"/>
		const main = <Main className="borde" id="conjuntoEventos" />;
		
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
