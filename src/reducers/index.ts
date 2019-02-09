import { combineReducers } from 'redux';
import { BagEntity, BagItemEntity } from '../model';
import { bagReducer } from './bag';
import { bagItemReducer } from './bagItem';

export interface State {
  bag: BagEntity[];
  item: BagItemEntity[];
};

export const state = combineReducers<State>({
  bag: bagReducer,
  item: bagItemReducer,
});
