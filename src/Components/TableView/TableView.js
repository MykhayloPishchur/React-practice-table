import React from "react";
import { Table, Button } from "react-bootstrap";
import formatedDateOfBirth from "../../Utils/formattedDOB";
import fullName from "../../Utils/createFullName";
import LocationInfo from "../../Utils/createLocation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./tableview.css"



const shortid = require("shortid");


const TableWiew = ({ users,currentSort,onSortChange,sortTypes }) => {

  return (
<<<<<<< HEAD
    <Table hover className="table table-bordered">
      <thead className="thead-dark text-center">
        <tr>
          <th>Avatar</th>
          <th >
          <div className='sortContainer' >
            <button className={`${sortTypes[currentSort].class}`}   onClick={onSortChange}></button>
             <span>Full Name</span> 
          </div>
          </th>
         
          <th>Birthday</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Nationality</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={shortid.generate()}>
              <td className="align-middle">
                <img src={user.picture.thumbnail} alt={user.id.value}></img>
              </td>
=======
    <div className="container-fluid">
      <Table hover className="table-bordered ">
        <thead className="thead-dark text-center">
          <tr>
            <th>Avatar</th>
            <th>Full Name</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Nationality</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={shortid.generate()}>
                <td className="align-middle">
                  <img src={user.picture.thumbnail} alt={user.id.value}></img>
                </td>
>>>>>>> c77dae2e9364eb2aa200e16746ecdcbba7af189e

                <td className="text-center align-middle font-weight-bold">
                  {fullName(user)}
                </td>

                <td className="text-center align-middle font-weight-bold">
                  {formatedDateOfBirth(user.dob)}
                </td>

                <td className="text-center align-middle font-weight-bold">
                  <div className="d-flex justify-content-between align-items-center">
                    <CopyToClipboard text={user.email}>
                      <Button size="sm" variant="primary">
                        Copy
                      </Button>
                    </CopyToClipboard>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </div>
                </td>

                <td className="text-center align-middle font-weight-bold">
                  <div className="d-flex justify-content-between align-items-center">
                    <CopyToClipboard text={user.phone}>
                      <Button size="sm" variant="primary">
                        Copy
                      </Button>
                    </CopyToClipboard>
                    <a href={`tel:${user.phone}`}>{user.phone}</a>
                  </div>
                </td>

                <td className="text-center align-middle font-weight-bold">
                  <div className="d-flex flex-row justify-content-between align-items-center">
                    <CopyToClipboard
                      text={user.location.country + LocationInfo(user.location)}
                    >
                      <Button size="sm" variant="primary">
                        Copy
                      </Button>
                    </CopyToClipboard>
                    <div className="d-flex flex-column justify-content-between align-items-center">
                      <p className="align-right">/{user.location.country}/</p>
                      {LocationInfo(user.location)}
                    </div>
                  </div>
                </td>

                <td className="align-middle text-center">
                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <span>{user.nat}</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TableWiew;
