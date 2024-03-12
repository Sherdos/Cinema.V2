import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const url = "/show/";
function MyCard(props) {
  return (
    <>
      {props.cards.map((card) => (
        <Card key={card.id} text="light" className="card">
          <Link to={url + card.uu_id + "/"}>
            <Card.Img variant="top" src={card.image} />
          </Link>
          <Card.Body>
            <Card.Title>
              <Link
                style={{ textDecorationLine: "none", color: "white" }}
                to={url + card.uu_id + "/"}
              >
                {card.title}
              </Link>
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default MyCard;
