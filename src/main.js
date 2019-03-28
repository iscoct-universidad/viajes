import React from 'react';
import Evento from './evento';
import './css/comun.css';
import './css/main.css';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			className: this.props.className,
			id: this.props.id,
			eventos: []
		};
	}
	
	componentDidMount() {
		let events = [];
		
		const url = 'http://localhost:8080/viajes.php';
		
		fetch(url).then( (response) => {
			return response.json();
		}).then( (myJson) => {
			let enlace = "https://www.google.es";
			let viajes = myJson.viajes;
			
			viajes.forEach( (tupla, index) => {
				events.push(<Evento enlace={enlace} className="imagenes" imagenFuente={tupla.imagenPrincipal} ciudad={tupla.ciudad} key={index} />);
			});
			
			this.setState({
				eventos: events
			});
		});
	}
	
	render() {
		return(
			<main className={this.state.className} id={this.state.id}>
				{ this.state.eventos }
			</main>
		);
	}
}
