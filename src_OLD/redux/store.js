import { configureStore } from '@reduxjs/toolkit'
// import { combineReducers } from 'redux'; //? уже не надо с RTK Query

import { filterSlice } from 'redux/filter/filterSlice';

import { itemsAPIbyRTKQuery } from 'redux/items/itemsSliceRTKQuery';
import { authAPIbyRTKQuery } from 'redux/auth/authSliceRTKQuery';

//? +++++++++++++++++++++++++++++++ redux-persist +++++++++++++++++++++++++++++++
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};
//? _______________________________ redux-persist _______________________________

// import { todosReducer } from './todos';
// import { authReducer } from './auth';

//! +++++++++++ persistedItemsReducer with redux-persist +++++++++++++++
const persistedAuthReducer = persistReducer(authPersistConfig, authAPIbyRTKQuery.reducer);



//! +++++++++++ store with RTK Query (3-й вариант - РАБОТАЕТ!!!) +++++++++++++++
//! export const getFilter = state => state.filter;
export const store = configureStore({
    reducer: {
        [itemsAPIbyRTKQuery.reducerPath]: itemsAPIbyRTKQuery.reducer,
        filter: filterSlice.reducer,
        // [authAPIbyRTKQuery.reducerPath]: authAPIbyRTKQuery.reducer,
        auth: persistedAuthReducer
    },
    // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), itemsAPIbyRTKQuery.middleware],
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        itemsAPIbyRTKQuery.middleware,
        authAPIbyRTKQuery.middleware,

    ],
});

//! +++++++++++ with redux-persist +++++++++++++++
export const persistor = persistStore(store)


//! ++++++++++++++++++++++++++++ ВЕСЬ State +++++++++++++++++++++++++++++++++++
// console.log("ВЕСЬ State из store.js ==> store.getState():", store.getState()); //!
//! ____________________________________________________________________________