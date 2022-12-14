import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';
import { contactsFilterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: contactsFilterSlice.reducer,
  },
});
