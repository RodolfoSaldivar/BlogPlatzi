import { TRAER_TODOS } from '../types/usuariosTypes';

const INITIAL_STATE = {
	usuarios: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODOS:
			return { ...state, usuarios: action.payload };

		default: return state;
	};
};