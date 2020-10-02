const getLoading = (state) => state.contacts.loading;

const getContacts = (state) => state.contacts.items;

export default {
  getContacts,
  getLoading,
};
