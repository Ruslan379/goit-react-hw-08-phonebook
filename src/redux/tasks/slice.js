import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import { fetchTasks, addTask, deleteTask, editContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchTasks.pending]: handlePending,
        [addTask.pending]: handlePending,
        [deleteTask.pending]: handlePending,
        [fetchTasks.rejected]: handleRejected,
        [addTask.rejected]: handleRejected,
        [deleteTask.rejected]: handleRejected,
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        [addTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        [deleteTask.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            // const index = state.items.findIndex(task => task.id === action.payload);
            // state.items.splice(index, 1);
            // const newContact = state.items.filter(contact => contact.id !== action.payload);
            console.log("deleteTask==>action.payload:", action.payload); //!
            state.items = state.items.filter(contact => contact.id !== action.payload);
            // state = { items: newContact }
        },

        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            // const index = state.items.findIndex(task => task.id === action.payload);
            // state.items.splice(index, 1);
            // const newContact = state.items.filter(contact => contact.id !== action.payload);
            console.log("editContact==>action.payload:", action.payload); //!
            console.log("state.items:", state.items); //!
            const index = state.items.findIndex(task => task.id === action.payload.id);
            console.log("index:", index); //!
            // console.log("state.items[index]:", state.items[index]); //!
            state.items.splice(index, 1, action.payload);


            // state.items = state.items.filter(contact => contact.id !== action.payload);
            // state = { items: newContact }
        },


        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const tasksReducer = tasksSlice.reducer;
