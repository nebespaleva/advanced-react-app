import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AuthByUserNameSchema } from "features/AuthByUsername";

export interface StoreSchema {
    counter: CounterSchema,
    user: UserSchema
    authByUsername: AuthByUserNameSchema
}