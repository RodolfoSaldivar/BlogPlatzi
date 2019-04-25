import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
			usuarios: []
		}
	}

	async componentDidMount() {
		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
		this.setState({
			usuarios: respuesta.data
		});
	}

	ponerFilas = () => this.state.usuarios.map((usuario) => (
		<tr key={ usuario.id }>
			<td>
				{ usuario.name }
			</td>
			<td>
				{ usuario.email }
			</td>
			<td>
				{ usuario.website }
			</td>
		</tr>
	));

	render() {
		return (
			<div className="margen">
				<table className="tabla">
					<thead>
						<tr>
							<th>
								Nombre
							</th>
							<th>
								Correo
							</th>
							<th>
								Enlace
							</th>
						</tr>
					</thead>
					<tbody>
						{ this.ponerFilas() }
					</tbody>
				</table>
			</div>
		)
	}
};

export default App;