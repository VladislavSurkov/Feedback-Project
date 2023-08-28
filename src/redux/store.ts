import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todo/product-slice";
import { authReducer } from "./user/auth-slice";
import { filtersReducer } from "./filters/filters-slice";
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import { modalReducer } from "./modal/modal-slice";


const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'isLogin'],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const rootReducer = combineReducers({
    auth: persistedReducer,
    todo: todoReducer,
    filters: filtersReducer,
    modal: modalReducer,
});


export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        todo: todoReducer,
        filters: filtersReducer,
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);
