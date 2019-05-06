import {
	TRAER_TODAS,
	CARGANDO,
	ERROR,
	CAMBIO_USUARIO,
	CAMBIO_TITULO,
	GUARDADA,
	ACTUALIZAR,
	LIMPIAR
} from '../types/tareasTypes';

const INITIAL_STATE = {
	tareas: {},
	cargando: false,
	error: '',
	usuario_id: '',
	titulo: '',
	regresar: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_TODAS:
			return {
				...state,
				tareas: action.payload,
				cargando: false,
				error: '',
				regresar: false
			};

		case CARGANDO:
			return { ...state, cargando: true };

		case ERROR:
			return { ...state, error: action.payload, cargando: false };

		case CAMBIO_USUARIO:
			return { ...state, usuario_id: action.payload };

		case CAMBIO_TITULO:
			return { ...state, titulo: action.payload };

		case GUARDADA:
			return {
				...state,
				tareas: {},
				cargando: false,
				error: '',
				regresar: true,
				usuario_id: '',
				titulo: ''
			};

		case ACTUALIZAR:
			return { ...state, tareas: action.payload };

		case LIMPIAR:
			return { ...state, usuario_id: '', titulo: '' };

		default: return state;
	};
};