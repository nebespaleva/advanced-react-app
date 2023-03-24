import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AuthByUserNameSchema } from "features/AuthByUsername";
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  authByUsername?: AuthByUserNameSchema;
}

export type StoreSchemaKey = keyof StoreSchema;

export interface ReduceManager {
  getReducerMap: () => ReducersMapObject<StoreSchema>;
  reduce: (state: StoreSchema, action: AnyAction) => CombinedState<StoreSchema>;
  add: (key: StoreSchemaKey, reducer: Reducer) => void;
  remove: (key: StoreSchemaKey) => void;
}

export interface StoreWithManager extends EnhancedStore<StoreSchema> {
  reducerManager: ReduceManager;
}
