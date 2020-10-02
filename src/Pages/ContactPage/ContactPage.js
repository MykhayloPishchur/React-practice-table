// import React from "react";
import style from "./contactpage.module.css";

import React, { Component } from "react";
import { connect } from "react-redux";
import fetchContacts from "../../Redux/contacts/contacts-operations";
import contactsSelectors from "../../Redux/contacts/contacts-selectors";

// const contactWiew = () => {
//   return (
//     <div className={style.wrapper}>
//       <div className={style.container}>contacts</div>
//     </div>
//   );
// };

// export default contactWiew;

class contactWiew extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={style.wrapper}>
        <div className={style.container}>{console.log(contacts)}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  onFetchContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(contactWiew);
