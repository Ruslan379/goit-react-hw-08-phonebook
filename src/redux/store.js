// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'; //? OLD
import { configureStore } from '@reduxjs/toolkit';
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
import storage from 'redux-persist/lib/storage';
import { tasksReducer } from './tasks/slice';
import { authReducer } from './auth/slice';



//? OLD
// const middleware = [
//     ...getDefaultMiddleware({
//         serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//     }),
// ];



// Persisting token field from auth slice to localstorage
const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};



//? OLD
// export const store = configureStore({
//     reducer: {
//         auth: persistReducer(authPersistConfig, authReducer),
//         tasks: tasksReducer,
//     },
//     middleware,
//     devTools: process.env.NODE_ENV === 'development',
// });

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    ],
    devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);



