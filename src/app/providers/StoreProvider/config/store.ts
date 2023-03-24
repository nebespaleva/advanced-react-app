import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { StoreSchema } from "./StoreSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";
import { authByUsernameReducer } from "features/AuthByUsername";

export const createReduxStore = (initialState?: StoreSchema) => {
    const reducers: ReducersMapObject<StoreSchema> = {
        user: userReducer,
        counter: counterReducer,
        authByUsername: authByUsernameReducer
    }
    return configureStore<StoreSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];