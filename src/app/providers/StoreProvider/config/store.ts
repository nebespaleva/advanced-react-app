import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./StoreSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "app/providers/StoreProvider/config/reduceManager";

export const createReduxStore = (
  initialState?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>
) => {
  const reducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(reducers);

  const store = configureStore<StoreSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
