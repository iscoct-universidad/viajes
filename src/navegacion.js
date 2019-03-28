import React from 'react';

export default class Navegacion extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			idLista: this.props.idLista,
			className: this.props.className,
			secciones: [],
			tipo: this.props.tipo	// Lateral o Superior
		}
	}
	
	componentDidMount() {
		const url = 'http://localhost:8080/navegacion' + this.state.tipo + '.php';
		
		fetch(url).then( (response) => {
			return response.json();
		}).then( (myJson) => {
			this.setState({
				secciones: myJson.secciones
			});
		});
	}
	
	render() {
		const lista = this.state.secciones.map((sec, index) =>
				<li className={this.state.className} key={index}>{sec}</li>
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
