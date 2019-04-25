
export const traerTodos = () => (dispatch) => {
	dispatch({
		type: 'traer_usuarios',
		payload: [1,2,3]
	})
};