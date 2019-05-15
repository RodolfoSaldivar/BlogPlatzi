import axios from 'axios';
import { TRAER_TODAS, CARGANDO, ERROR } from '../types/tareasTypes';

export const traerTodas = () => async (dispatch) => {
	dispatch({
		type: CARGANDO
	});

	try {
		const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
		
		const tareas = {};
		respuesta.data.map((tarea) => (
			tareas[tarea.userId] = {
				...tareas[tarea.userId],
				[tarea.id]: {
					...tarea
				}
			}
		));

		dispatch({
			type: TRAER_TODAS,
			payload: tareas
		})
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Información de usuario no disponible.'
		})
	}
};