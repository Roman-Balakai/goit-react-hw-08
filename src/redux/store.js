import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    // filter: filtersReducer,
    auth: authReducer,
  },
});
