import { combineReducers } from 'redux';
import { MemberEntity, MemberErrors, BagEntity, BagItemEntity } from '../model';
import { bagReducer } from './bag';
import { bagItemReducer } from './bagItem';
import { memberErrorsReducer } from './memberErrors';

export interface State {
  bag: BagEntity[];
  bagItem: BagItemEntity;
};

export const state = combineReducers<State>({
  bag: bagReducer,
  bagItem: bagItemReducer,
});
