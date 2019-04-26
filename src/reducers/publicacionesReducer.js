// import { TRAER_TODOS, CARGANDO, ERROR } from '../types/usuariosTypes';

const INITIAL_STATE = {
	publicaciones: [],
	cargando: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'traer_todos':
			return { ...state, publicaciones: action.payload };

		default: return state;
	};
};