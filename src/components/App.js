import React, { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			usuarios: [
				{
					nombre: 'Rodolfo',
					correo: 'rodolfo@platzi.com',
					enlace: 'rodolfo.com'
				},
				{
					nombre: 'Rodolfito',
					correo: 'rodolfo@platzi.com',
					enlace: ''
				},
				{
					nombre: 'Platzi',
					correo: 'info@platzi.com',
					enlace: 'platzi.com'
				}
			]
		}
	}

	ponerFilas = () => this.state.usuarios.map((usuario) => (
		<tr>
			<td>
				{ usuario.nombre }
			</td>
			<td>
				{ usuario.correo }
			</td>
			<td>
				{ usuario.enlace }
			</td>
		</tr>
	));

	render() {
		return (
			<div className="margen">
				<table className="tabla">
					<thead>
						<th>
							Nombre
						</th>
						<th>
							Correo
						</th>
						<th>
							Enlace
						</th>
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