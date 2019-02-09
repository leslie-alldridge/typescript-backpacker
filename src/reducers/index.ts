import { combineReducers } from "redux";
import { BagEntity, BagItemEntity, AuthEntity } from "../model";
import { bagReducer } from "./bag";
import { bagItemReducer } from "./bagItem";
import { authReducer } from "./auth";
export interface State {
  bag: BagEntity[];
  item: BagItemEntity[];
  auth: AuthEntity[];
}

export const state = combineReducers<State>({
  bag: bagReducer,
  item: bagItemReducer,
  auth: authReducer
});
