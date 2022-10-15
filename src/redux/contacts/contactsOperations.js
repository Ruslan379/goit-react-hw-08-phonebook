import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//! GET @ /contacts
export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            console.log("res.data:", res.data); //!
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//! POST @ /contacts
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//! DELETE @ /contacts/:id
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            console.log("contactId:", contactId); //!
            await axios.delete(`/contacts/${contactId}`);
            // const response = await axios.delete(`/contacts/${contactId}`); //! Ошибка Репеты
            // console.log("deleteContact==>response.data", response.data); //!
            // return response.data; //! Ошибка Репеты
            return contactId;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

//! PATCH @ /contacts/:id
export const editContact = createAsyncThunk(
    'contacts/editContact',
    async ({ id, newName, newNumber }, thunkAPI) => {
        try {
            console.log("id:", id); //!
            const response = await axios.patch(`/contacts/${id}`, { name: newName, number: newNumber });
            // const response = await axios.delete(`/contacts/${contactId}`); //! Ошибка Репеты
            console.log("editContact==>response.data", response.data); //!
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);