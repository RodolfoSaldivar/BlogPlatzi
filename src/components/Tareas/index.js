import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as tareasActions from '../../actions/tareasActions';

class Tareas extends Component {
	componentDidMount() {
		this.props.traerTodas();
	}

	render() {
		console.log(this.props.tareas);
		return (
			<div>
				Tareas
			</div>
		);
	}
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer;

export default connect(mapStateToProps, tareasActions)(Tareas);