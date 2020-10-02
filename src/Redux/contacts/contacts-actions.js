import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};
