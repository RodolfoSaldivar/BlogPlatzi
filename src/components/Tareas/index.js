import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

import * as tareasActions from '../../actions/tareasActions';

class Tareas extends Component {
	componentDidMount() {
		if (!Object.keys(this.props.tareas).length)
			this.props.traerTodas();
	}

	componentDidUpdate() {
		const { tareas, cargando, traerTodas } = this.props;

		if (!Object.keys(tareas).length && !cargando) {
			traerTodas();
		}
	}

	mostrarContenido = () => {
		const { tareas, cargando, error } = this.props;

		if (cargando) {
			return <Spinner />
		}
		if (error) {
			return <Fatal mensaje={ error } />
		}

		return Object.keys(tareas).map((usu_id) => (
			<div key={ usu_id }>
				<h2>Usuario { usu_id }</h2>
				<div className='contenedor_tareas'>
					{ this.ponerTareas(usu_id) }
				</div>
			</div>
		));
	};

	ponerTareas = (usu_id) => {
		const { tareas, cambioCheck, eliminar } = this.props;
		const por_usuario = {
			...tareas[usu_id]
		};

		return Object.keys(por_usuario).map((tar_id) => (
			<div key={ tar_id }>
				<input type='checkbox'
					defaultChecked={ por_usuario[tar_id].completed }
					onChange={
						() => cambioCheck(usu_id, tar_id)
					}
				/>
				{ por_usuario[tar_id].title }
				<button className='m_left'>
					<Link to={ `/tareas/guardar/${usu_id}/${tar_id}` }>
						Editar
					</Link>
				</button>
				<button className='m_left' onClick={ () => eliminar(tar_id) }>
					Eliminar
				</button>
			</div>
		));
	};

	render() {
		return (
			<div>
				<button>
					<Link to='/tareas/guardar'>
						Agregar
					</Link>
				</button>
				{ this.mostrarContenido() }
			</div>
		);
	}
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Tareas);