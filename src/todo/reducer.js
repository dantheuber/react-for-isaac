import { combineReducers } from 'redux';
import * as types from './action-types';

const todoList = (state = [], action) => {
  switch(action.type) {
    case types.ADD_ITEM:
      return [{
        name: action.payload,
        complete: false,
      }, ...state];
    case types.ITEM_COMPLETE:
      const newState = [...state];
      newState[action.payload].complete = true;
      return newState;
    case types.DELETE_ITEM:
      state.splice(action.payload, 1)
      return [...state];
    default:
      return state;
  }
};

export const reducer = combineReducers({
  todoList,
});
