import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://goit-task-manager.herokuapp.com/'; //! РЕПЕТА
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';  //! ДЗ-8


//! Utility to add JWT
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

//! Utility to remove JWT
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
//! Создать нового пользователя
export const register = createAsyncThunk(
    'auth/signup',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            // After successful registration, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
//! Залогинить пользователя
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);
            // After successful login, add the token to the HTTP header
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
//! Разлогинить пользователя
export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            // After a successful logout, remove the token from the HTTP header
            clearAuthHeader();
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 * *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */
//! Получить информацию о текущем пользователе
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        // Reading the token from the state via getState()
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // If there is no token, exit without performing any request
            console.log('Токена нет, уходим из refreshUser'); //!
            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {
            // If there is a token, add it to the HTTP header and perform the request
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


//? +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //! --------------Добавленные users -------------------
  // const user1 = {
  //   name: "Ruslan Fate",
  //   email: "fate@gmail.com",
  //   password: "poi098lkj",
  // };

  // const user2 = {
  //   name: "Egor Rudik",
  //   email: "egor@gmail.com",
  //   password: "rty543yui"
  // };

  // const user3 = {
  //   name: "Sergej Fedorchuk",
  //   email: "fedorchuk@gmail.com",
  //   password: "ghf479lkf"
  // };


  // const user4 = {
  //   name: "Sonya Furkina",
  //   email: "furkina@gmail.com",
  //   password: "nbhy7564kjuy"
  // };

  //! Залогиненый user на гите
  // const user5 = {
  //   name: "Danil Rooti",
  //   email: "danilrooti@gmail.com",
  //   password: "rooti6778ghyt"
  // };