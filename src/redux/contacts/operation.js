// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://67a7a2cf203008941f682cc4.mockapi.io";

// export const fetchData = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkApi) => {
//     try {
//       const { data } = await axios.get("/contacts");
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.mesage);
//     }
//   }
// );
// export const deleteContacts = createAsyncThunk(
//   "contacts/deleteContact",
//   async (id, thunkApi) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.mesage);
//     }
//   }
// );
// export const addContacts = createAsyncThunk(
//   "contacts/addContact",
//   async (contact, thunkApi) => {
//     try {
//       const { data } = await axios.post("/contacts", contact);
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.mesage);
//     }
//   }
// );
