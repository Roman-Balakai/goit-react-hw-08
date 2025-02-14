// import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
// import { fetchData, deleteContacts, addContacts } from "./contactsOps";
// import { selectFilters } from "./filtersSlice";

// const initialState = {
//   contacts: {
//     items: [],
//     loading: false,
//     error: null,
//   },
// };
// const slice = createSlice({
//   name: "contacts",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchData.fulfilled, (state, action) => {
//         state.contacts.items = action.payload;
//         state.contacts.loading = false;
//       })
//       .addCase(deleteContacts.fulfilled, (state, action) => {
//         state.contacts.items = state.contacts.items.filter(
//           (items) => items.id !== action.payload.id
//         );
//         state.contacts.loading = false;
//       })
//       .addCase(addContacts.fulfilled, (state, action) => {
//         state.contacts.items.push(action.payload);
//         state.contacts.loading = false;
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchData.rejected,
//           addContacts.rejected,
//           deleteContacts.rejected
//         ),
//         (state, action) => {
//           state.contacts.loading = action.payload;
//           state.contacts.error = action.error.message;
//         }
//       )
//       .addMatcher(
//         isAnyOf(addContacts.pending, deleteContacts.pending, fetchData.pending),
//         (state) => {
//           state.contacts.loading = true;
//           state.contacts.error = null;
//         }
//       );
//   },
// });
// export const contactsReducer = slice.reducer;
// export const selectContacts = (state) => state.contacts.contacts.items;
// export const selectIsLoading = (state) => state.contacts.contacts.loading;
// export const selectIsError = (state) => state.contacts.contacts.error;
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilters],
//   (contacts, filter) => {
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
