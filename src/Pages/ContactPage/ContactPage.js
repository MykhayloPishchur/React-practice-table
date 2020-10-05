import React, { Component } from "react";
import { connect } from "react-redux";
import fetchContacts from "../../Redux/contacts/contacts-operations";
import contactsSelectors from "../../Redux/contacts/contacts-selectors";
import style from "./contactpage.module.css";
import TableWiew from "../../Components/TableView";
import CardView from "../../Components/CardView";
import Pagination from "../../Components/Pagination";
import PerPage from "../../Components/ContactPerPage";
import Switch from "react-switch";

const itemPerPage = [5, 10, 20, "All"];

class contactWiew extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 5,
    isTabular: true,
  };

  handleChange = (event) => {
    if (event.currentTarget.value === "All") {
      this.setState({
        postsPerPage: this.props.contacts.length,
        currentPage: 1,
      });
    } else
      this.setState({
        postsPerPage: event.target.value,
        currentPage: 1,
      });
  };

  componentDidUpdate(prevState) {
    const { isTabular } = this.state;
    if (prevState.isTabular !== isTabular) {
      localStorage.setItem("tableView", isTabular);
    }
  }

  componentDidMount() {
    const actualView = localStorage.getItem("tableView");
    if (actualView === "false") {
      this.setState({ isTabular: false });
    } else this.setState({ isTabular: true });
    this.props.onFetchContacts();
  }

  handleChangeView = () => {
    const { isTabular } = this.state;
    this.setState({
      isTabular: !isTabular,
    });
  };

  render() {
    const { currentPage, postsPerPage, isTabular } = this.state;
    const { contacts } = this.props;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = contacts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => this.setState({ currentPage: pageNumber });

    console.log(contacts);

    return (
      <div className={style.container}>
        <PerPage onChange={this.handleChange} itemPerPage={itemPerPage} />
        <Switch onChange={this.handleChangeView} checked={isTabular} />
        {isTabular ? (
          <TableWiew users={currentPosts} />
        ) : (
          <CardView items={currentPosts} />
        )}

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
