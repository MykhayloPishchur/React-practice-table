import React, { Component } from "react";
import { connect } from "react-redux";
import fetchContacts from "../../Redux/contacts/contacts-operations";
import contactsSelectors from "../../Redux/contacts/contacts-selectors";
import style from "./contactpage.module.css";
import TableWiew from "../../Components/TableView";
import Pagination from "../../Components/Pagination";

class contactWiew extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 5,
  };

  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    const { currentPage, postsPerPage } = this.state;
    const { contacts } = this.props;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = contacts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    console.log(contacts);

    return (
      <div className={style.container}>
        <div className={style.selectContainer}>
          <div className={style.selectWrap}>
            <span>Per page :</span>
            <select className="custom-select">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <TableWiew users={currentPosts}></TableWiew>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={contacts.length}
          paginate={paginate}
          active={currentPage}
        />
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
