import { combineReducers } from 'redux';
import { NAME as TODO, reducer as todoReducer } from './todo';

export const reducer = combineReducers({
 [TODO]: todoReducer,
});