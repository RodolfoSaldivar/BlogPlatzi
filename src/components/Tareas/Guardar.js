import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tareasActions from '../../actions/tareasActions';

class Guardar extends Component {
	cambioUsuarioId = (event) => {
		this.props.cambioUsuarioId(event.target.value);
	};

	cambioTitulo = (event) => {
		this.props.cambioTitulo(event.target.value);
	};

	render() {
		return (
			<div>
				<h1>Guardar Tarea</h1>
				Usuario id:
				<input
					type='number'
					defaultValue={ this.props.usuario_id }
					onChange={ this.cambioUsuarioId }
				/>
				<br /><br />
				Título:
				<input
					defaultValue={ this.props.titulo }
					onChange={ this.cambioTitulo }
				/>
				<br /><br />
				<button>
					Guardar
				</button>
			</div>
		);
	}
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Guardar);