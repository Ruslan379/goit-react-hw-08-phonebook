// export const selectLoading = state => state.contacts.loading; //! Ошибка Репеты
export const selectLoading = state => state.contacts.isLoading;

// export const selectFilter = state => state.contacts.filter;

export const selectAllTasks = state => state.contacts.items;
