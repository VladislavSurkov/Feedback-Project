import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/product-slice";
import { authReducer } from "./user/auth-slice";



const rootReducer = combineReducers({
    auth: authReducer,
    todo:  todoReducer
});


const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch

export default store