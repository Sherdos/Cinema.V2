import React, { useState, useEffect } from "react";
import { Card, Carousel, Container } from "react-bootstrap";
const url = "/show/";
function MyCard(props) {
  return (
    <>
      {props.cards.map((card) => (
        <Card text="light" className="card">
          <a href={url + card.uu_id + "/"}>
            <Card.Img variant="top" src={card.image} />
          </a>
          <Card.Body>
            <Card.Title
              style={{ textDecorationLine: "none" }}
              href={url + card.uu_id + "/"}
              as={"a"}
            >
              {card.title}
            </Card.Title>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}

export default MyCard;
