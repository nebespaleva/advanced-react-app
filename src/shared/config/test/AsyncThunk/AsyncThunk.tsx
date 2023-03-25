import { StoreSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';


type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class AsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.Mocked<any>

    getState: () => StoreSchema

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)

        return action(this.dispatch, this.getState, undefined)
    }
}