import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import { fetchContacts, addContact, deleteContact, editContact } from './contactsOperations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [editContact.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [editContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            //! вариант Репеты:
            // const index = state.items.findIndex(task => task.id === action.payload);
            // state.items.splice(index, 1);
            //! МОЙ вариант:
            // const newContact = state.items.filter(contact => contact.id !== action.payload);
            // console.log("deleteContact==>action.payload:", action.payload); //!
            state.items = state.items.filter(contact => contact.id !== action.payload);
            // state = { items: newContact }
        },

        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            // console.log("editContact==>action.payload:", action.payload); //!
            // console.log("state.items:", state.items); //!
            const index = state.items.findIndex(task => task.id === action.payload.id);
            // console.log("index:", index); //!
            // console.log("state.items[index]:", state.items[index]); //!
            state.items.splice(index, 1, action.payload);
        },


        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
