import { applyMiddleware,createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducer';

export default createStore(reducer,applyMiddleware(thunkMiddleware));