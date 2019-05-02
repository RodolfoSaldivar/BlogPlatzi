import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes';

export const traerTodas = () => async (dispatch) => {
	dispatch({
		type: CARGANDO
	});

	try {
		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
		
		const comentarios = {};
		respuesta.data.map((com) => (
			comentarios[com.userId] = {
				...comentarios[com.userId],
				[com.id]: {
					...com
				}
			}
		));

		dispatch({
			type: TRAER_TODAS,
			payload: comentarios
		})
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Tareas no disponibles.'
		})
	}
};