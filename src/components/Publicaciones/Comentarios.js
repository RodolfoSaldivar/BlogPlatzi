import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

const Comentarios = (props) => {
	if (props.com_error) {
		return <Fatal mensaje={ props.com_error } />
	}
	if (props.com_cargando && !props.comentarios.length) {
		return <Spinner />
	}

	const ponerComentarios = () => (
		props.comentarios.map((comentario) => (
			<li key={ comentario.id }>
				<b><u>{ comentario.email }</u></b>
				<br />
				{ comentario.body }
			</li>
		))
	);

	return (
		<ul>
			{ ponerComentarios() }
		</ul>
	);
};

const mapStateToProps = ({publicacionesReducer}) => publicacionesReducer;

export default connect(mapStateToProps)(Comentarios);