import { combineReducers } from 'redux';
import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducer';

export default combineReducers({
	usuariosReducer,
	publicacionesReducer
});