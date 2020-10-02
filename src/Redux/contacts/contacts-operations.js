import axios from "axios";
import contactsActions from "./contacts-actions";

const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

axios.defaults.baseURL = "https://randomuser.me/api/";

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  axios
    .get(`?results=${randomIntegerInRange(0, 100)}`)
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

export default fetchContacts;
