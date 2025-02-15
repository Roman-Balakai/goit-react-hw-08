import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, deleteContacts, fetchData } from "./operation";

const initialState = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};
const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.contacts.loading = false;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (items) => items.id !== action.payload.id
        );
        state.contacts.loading = false;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.contacts.loading = false;
      })
      .addMatcher(
        isAnyOf(
          fetchData.rejected,
          addContacts.rejected,
          deleteContacts.rejected
        ),
        (state, action) => {
          state.contacts.loading = action.payload;
          state.contacts.error = action.error.message;
        }
      )
      .addMatcher(
        isAnyOf(addContacts.pending, deleteContacts.pending, fetchData.pending),
        (state) => {
          state.contacts.loading = true;
          state.contacts.error = null;
        }
      );
  },
});
export const contactsReducer = slice.reducer;
