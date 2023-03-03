import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import { StoreSchema } from "./StoreSchema";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export const createReduxStore = (initialState?: StoreSchema) => {
    const reducers: ReducersMapObject<StoreSchema> = {
        user: userReducer,
        counter: counterReducer,
    }
    return configureStore<StoreSchema>({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState
    })
}