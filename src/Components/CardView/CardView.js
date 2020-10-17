import React from "react";
import { Card } from "react-bootstrap";
import fullName from "../../Utils/createFullName";
import formatedDateOfBirth from "../../Utils/formattedDOB";
import LocationInfo from "../../Utils/createLocation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import style from "./cardview.module.css";

const shortid = require("shortid");

const CardView = ({ items }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {items.map((item) => {
        return (
          <Card
            className="m-2 text-center"
            key={shortid.generate()}
            style={{ width: "22rem" }}
          >
            <Card.Img variant="top" src={item.picture.large} />
            <Card.Body>
              <Card.Title className={style.title}>{fullName(item)}</Card.Title>
              <p>{formatedDateOfBirth(item.dob)}</p>

              <div className="d-flex justify-content-center flex-row align-items-center">
                <CopyToClipboard text={item.email}>
                  <img
                    className={style.image}
                    src="https://i.ibb.co/G0Xv17F/copy.png"
                    alt={item.id.name}
                  ></img>
                </CopyToClipboard>
                <a className={style.email} href={`mailto:${item.email}`}>
                  {item.email}
                </a>
              </div>

              <div className="d-flex flex-column justify-content-between align-items-center  font-weight-bold">
                <p className="align-right">/{item.location.country}/</p>
                {LocationInfo(item.location)}
              </div>

              <CopyToClipboard
                text={item.location.country + LocationInfo(item.location)}
              >
                <img
                  className={style.image}
                  src="https://i.ibb.co/G0Xv17F/copy.png"
                  alt={item.id.name}
                ></img>
              </CopyToClipboard>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardView;