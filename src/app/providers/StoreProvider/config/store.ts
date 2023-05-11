import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StoreSchema } from "./StoreSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { createReducerManager } from "app/providers/StoreProvider/config/reduceManager";
import { $api } from "shared/api";
import {NavigateOptions, To} from "react-router";

export const createReduxStore = (
  initialState?: StoreSchema,
  asyncReducers?: ReducersMapObject<StoreSchema>,
  navigate?: (to: To, options?: NavigateOptions)=> void
) => {
  const reducers: ReducersMapObject<StoreSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(reducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        }
      }
    })
  });

  //@ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
