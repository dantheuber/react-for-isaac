import { NAME } from './constants';

export const todoList = state => state[NAME].todoList;
export const todoItem = index => state => todoList(state)[index];
export const numberOfItems = state => todoList(state).length;