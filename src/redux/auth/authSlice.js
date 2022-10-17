import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        //! register
        [register.pending](state, { payload }) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },
        [register.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected](state, { payload }) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },

        //! logIn
        [logIn.pending](state, { payload }) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },
        [logIn.fulfilled](state, { payload }) {
            state.user = payload.user;
            state.token = payload.token;
            state.isLoggedIn = true;
        },
        [logIn.rejected](state, { payload }) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
            state.isRefreshing = false;
        },

        //! logOut
        [logOut.pending](state) {
            state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [logOut.rejected](state) {
            state.isLoggedIn = true;
        },

        //! refreshUser
        [refreshUser.pending](state) {
            state.isRefreshing = true;
        },
        [refreshUser.fulfilled](state, { payload }) {
            state.user = payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },
        [refreshUser.rejected](state) {
            state.isRefreshing = false;
        },
    },
});

export const authReducer = authSlice.reducer;
