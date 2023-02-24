import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const reducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


export const store = configureStore({
    // reducer: {
    //     auth: authReducer
    // }
    reducer: persistedReducer,
    middleware: [thunk]
})