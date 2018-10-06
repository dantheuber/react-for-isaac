import actionTypeConstructor from '../utils/action-type-constructor';
import { NAME } from './constants';

const ca = actionTypeConstructor(NAME);

export const ADD_ITEM = ca('ADD_ITEM');
export const DELETE_ITEM = ca('DELETE_ITEM');
export const ITEM_COMPLETE = ca('ITEM_COMPLETE');