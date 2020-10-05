import React from "react";
import { Card } from "react-bootstrap";
import fullName from "../../Utils/createFullName";
const shortid = require("shortid");

const CardView = ({ items }) => {
  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
      {items.map((item) => {
        return (
          <Card
            className="m-2"
            key={shortid.generate()}
            style={{ width: "18rem" }}
          >
            <Card.Img variant="top" src={item.picture.large} />
            <Card.Body>
              <Card.Title>{fullName(item)}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default CardView;
