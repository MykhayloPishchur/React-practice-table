import contactReducer from "./contacts/contacts-reducer";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
