
import { thunk } from "redux-thunk";
import type { ThunkMiddleware } from "redux-thunk";
import type{AuthActionTypes} from "redux-thunk";
import {rootReducer} from "../reducers/rootReducer";
import { applyMiddleware, createStore } from "redux";

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    undefined,
    applyMiddleware(
        thunk as ThunkMiddleware<RootState,AuthActionTypes>
    )
);