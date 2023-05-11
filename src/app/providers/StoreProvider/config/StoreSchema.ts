import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AuthByUserNameSchema } from "features/AuthByUsername";
import {ProfileSchema} from 'entities/Profile';
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import {AxiosInstance} from "axios";
import {NavigateOptions, To} from "react-router";

export interface StoreSchema {
  counter: CounterSchema;
  user: UserSchema;

  // Async reducers
  authByUsername?: AuthByUserNameSchema;
  profile?: ProfileSchema
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

export interface ThunkExtraArgs {
  api: AxiosInstance,
  navigate?: (to: To, options?: NavigateOptions)=> void
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArgs,
}
