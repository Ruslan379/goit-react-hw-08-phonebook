import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchTasks = createAsyncThunk(
    'tasks/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');
            console.log("res.data", res.data); //!
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// POST @ /tasks
export const addTask = createAsyncThunk(
    'tasks/addTask',
    async ({ name, number }, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', { name, number });
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

// DELETE @ /tasks/:id
export const deleteTask = createAsyncThunk(
    'tasks/deleteTask',
    async (taskId, thunkAPI) => {
        try {
            console.log("taskId", taskId); //!
            const response = await axios.delete(`/contacts/${taskId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
