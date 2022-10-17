import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/authOperations';
import { fetchContacts, addContact, deleteContact, editContact } from './contactsOperations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
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

        [fetchContacts.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items = payload;
        },

        [addContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },

        [deleteContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            //! вариант Репеты:
            // const index = state.items.findIndex(task => task.id === payload);
            // state.items.splice(index, 1);
            //! МОЙ вариант:
            // const newContact = state.items.filter(contact => contact.id !== payload);
            // console.log("deleteContact==>payload:", payload); //!
            state.items = state.items.filter(contact => contact.id !== payload);
            // state = { items: newContact }
        },

        [editContact.fulfilled](state, { payload }) {
            state.isLoading = false;
            state.error = null;
            // console.log("editContact==>payload:", payload); //!
            // console.log("state.items:", state.items); //!
            const index = state.items.findIndex(task => task.id === payload.id);
            // console.log("index:", index); //!
            // console.log("state.items[index]:", state.items[index]); //!
            state.items.splice(index, 1, payload);
        },


        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
