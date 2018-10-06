import * as types from './action-types';

let number = 0;
export const addItem = (e) => ({
  type: types.ADD_ITEM,
  payload: `test ${number++}`,
});

export const deleteItem = (itemIndex) => ({
  type: types.DELETE_ITEM,
  payload: itemIndex,
});

export const completeItem = (itemIndex) => ({
  type: types.ITEM_COMPLETE,
  payload: itemIndex,
});