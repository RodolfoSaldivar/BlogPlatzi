import axios from 'axios';
import {
	CARGANDO,
	ERROR,
	TRAER_POR_USUARIO
} from '../types/publicacionesTypes';
import * as usuariosTypes from '../types/usuariosTypes';

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

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
	const usuarios_actualizados = [...usuarios];
	usuarios_actualizados[key] = {
		...usuarios[key],
		publicaciones_key
	}

	dispatch({
		type: USUARIOS_TRAER_TODOS,
		payload: usuarios_actualizados
	});

	dispatch({
		type: TRAER_POR_USUARIO,
		payload: publicaciones_actualizadas
	});
};