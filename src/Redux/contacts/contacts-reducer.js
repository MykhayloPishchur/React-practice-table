import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

const items = createReducer([], {
  [contactsActions.fetchContactsSuccess]: (state, action) => action.payload,
});

const loading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

export default combineReducers({
  items,
  loading,
});
