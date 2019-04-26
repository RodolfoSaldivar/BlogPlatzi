import axios from 'axios';

export const traerTodos = () => async (dispatch) => {
	const respuesta = await axios.get('https://jsonplaceholder.typicode.com/posts');
	dispatch({
		type: 'traer_todos',
		payload: respuesta.data
	})
};