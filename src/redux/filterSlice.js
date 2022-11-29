import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  inputValue: '',
};

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    addFilter: {
      reducer(state, action) {
        state.inputValue = action.payload.text;
      },
      prepare(text) {
        return {
          payload: {
            text,
          },
        };
      },
    },
  },
});

export const { addFilter } = contactsFilterSlice.actions;
