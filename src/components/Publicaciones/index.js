import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usuariosActions from '../../actions/usuariosActions';
import * as publicacionesActions from '../../actions/publicacionesActions';

const { traerTodos: usuariosTraerTodos } = usuariosActions;
const { traerTodos: publicacionesTraerTodos } = publicacionesActions;

class Publicaciones extends Component {

	componentDidMount() {
		if (!this.props.usuariosReducer.usuarios.length) {
			this.props.usuariosTraerTodos();
		}
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<h1>
					Publicaciones de 
				</h1>
				{ this.props.match.params.key }
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
	return { usuariosReducer, publicacionesReducer };
};

const mapDispatchToProps = {
	usuariosTraerTodos,
	publicacionesTraerTodos
};

export default connect(mapStateToProps, mapDispatchToProps)(Publicaciones);