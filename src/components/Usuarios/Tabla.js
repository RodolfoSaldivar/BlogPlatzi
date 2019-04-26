import React from 'react';
import { connect } from 'react-redux';

const Tabla = (props) => {

	const ponerFilas = () => props.usuarios.map((usuario) => (
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

	return (
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
				{ ponerFilas() }
			</tbody>
		</table>
	)
}

const mapStateToProps = (reducers) => {
	return reducers.usuariosReducer;
};

export default connect(mapStateToProps)(Tabla);