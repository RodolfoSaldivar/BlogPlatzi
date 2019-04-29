import axios from 'axios';
import {
	CARGANDO,
	ERROR,
	TRAER_POR_USUARIO
} from '../types/publicacionesTypes';

export const traerPorUsuario = (key) => async (dispatch, getState) => {
	let { usuarios } = getState().usuariosReducer;
	const { publicaciones } = getState().publicacionesReducer;
	const usuario_id = usuarios[key].id;

	const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
	const publicaciones_actualizadas = [
		...publicaciones,
		respuesta.data
	];
	const publicaciones_key = publicaciones_actualizadas.length - 1;
	usuarios[key]['publicaciones_key'] = publicaciones_key;


	dispatch({
		type: TRAER_POR_USUARIO,
		payload: publicaciones_actualizadas
	});
};